// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import UIKit
import GRPC
import NIO

struct RESTResults: Decodable {
  let predictions: [[Double]]
}

class ViewController: UIViewController {

    @IBOutlet weak var txtOutput: UILabel!
    @IBOutlet weak var txtInput: UITextField!
    @IBAction func btnClick(_ sender: Any) {
        if (txtInput.text == "") {
            self.txtOutput.text = "Please enter a number first"
            self.txtOutput.sizeToFit()
            return
        }
        let inputVal: Double =  Double(txtInput.text!)!
        doInference(value: inputVal)
    }
    @IBOutlet weak var picker: UIPickerView!
    
    let connectionMode = ["REST", "gRPC"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        picker.dataSource = self
        picker.delegate = self
    }

    func doInference(value:Double){
        if (connectionMode[picker.selectedRow(inComponent: 0)] == "REST") {
            print("Using REST")

            let json: [String: Any] = ["signature_name" : "serving_default", "instances" : [[value]]]
            
            let jsonData = try? JSONSerialization.data(withJSONObject: json)

            // Create POST request
            let url = URL(string: "http://localhost:8501/v1/models/regression:predict")!
            var request = URLRequest(url: url)
            request.httpMethod = "POST"

            // Insert json data to the request
            request.httpBody = jsonData

            let task = URLSession.shared.dataTask(with: request) { data, response, error in
                guard let data = data, error == nil else {
                    print(error?.localizedDescription ?? "No data")
                    return
                }
                let results: RESTResults = try! JSONDecoder().decode(RESTResults.self, from: data)
                DispatchQueue.main.async{
                    self.txtOutput.text = String(results.predictions[0][0])
                }
            }

            task.resume()
        }
        else {
            print("Using gRPC")

            let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
            let channel = ClientConnection.insecure(group: group).connect(host: "localhost", port: 8500)
            let stub = Tensorflow_Serving_PredictionServiceClient(channel: channel)
            
            var modelSpec = Tensorflow_Serving_ModelSpec()
            modelSpec.name = "regression"
            modelSpec.signatureName = "serving_default"
            
            // Prepare input tensor
            var batchDim = Tensorflow_TensorShapeProto.Dim()
            batchDim.size = 1
            var inputDim = Tensorflow_TensorShapeProto.Dim()
            inputDim.size = 1
            var inputTensorShape = Tensorflow_TensorShapeProto()
            inputTensorShape.dim = [batchDim, inputDim]
            var inputTensor = Tensorflow_TensorProto()
            inputTensor.dtype = Tensorflow_DataType.dtFloat
            inputTensor.tensorShape = inputTensorShape
            inputTensor.floatVal = [Float(value)]
            
            var request = Tensorflow_Serving_PredictRequest()
            request.modelSpec = modelSpec
            request.inputs = ["dense_input" : inputTensor]
            
            let callOptions = CallOptions(timeLimit: .timeout(.seconds(15)))
            let call = stub.predict(request, callOptions: callOptions)
            call.response.whenSuccess { response in
                let result = response.outputs["dense_1"]?.floatVal[0]
                DispatchQueue.main.async{
                    self.txtOutput.text = String(describing: result!)
                }
            }
            call.response.whenFailure { error in
                print("Call failed with error\n\(error)")
            }
        }
    }
}

extension ViewController: UIPickerViewDataSource {
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return connectionMode.count
    }
}

extension ViewController: UIPickerViewDelegate {
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return connectionMode[row]
    }
}
