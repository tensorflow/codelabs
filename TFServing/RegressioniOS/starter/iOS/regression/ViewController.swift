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
            // TODO: add code to send a REST request to TF Serving
            
        }
        else {
            print("Using gRPC")
            // TODO: add code to send a gRPC request to TF Serving
            
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
