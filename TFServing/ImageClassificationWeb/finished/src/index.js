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

function classify_img(){
    let inputImg = document.querySelector('#image');
    let inputImgWidth = inputImg.clientWidth;
    let inputImgHeight = inputImg.clientHeight;

    let img = new Image();
    img.src = 'cat.jpg';
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = inputImgWidth;
    canvas.height = inputImgHeight;

    let radioButtons = document.getElementsByName('connection_mode');
    
    if (radioButtons[0].checked) {
        console.log('Using REST');
        // imgTensor should be of shape [1, height, width, 3]
        let imgTensor = new Array();
        let pixelArray = new Array();
        context.drawImage(img, 0, 0);
        for(let i=0; i<inputImgHeight; i++) {
            pixelArray[i] = new Array();
            for (let j=0; j<inputImgWidth; j++) {
                pixelArray[i][j] = new Array();
                pixelArray[i][j].push(context.getImageData(i, j, 1, 1).data[0]/255); 
                pixelArray[i][j].push(context.getImageData(i, j, 1, 1).data[1]/255); 
                pixelArray[i][j].push(context.getImageData(i, j, 1, 1).data[2]/255); 
            }
        }
        imgTensor.push(pixelArray);
        
        const RESTURL = 'http://localhost:8000/v1/models/inception:predict';        
        let xhr = new XMLHttpRequest();
        xhr.open('POST', RESTURL);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8;');
        let data = JSON.stringify({
            instances: imgTensor
        });    
        xhr.onload = () => {
            const response = JSON.parse(xhr.responseText);
            const maxIndex = argmax(response['predictions'][0])
            document.getElementById('category').textContent = 'Predicted category: ' + maxIndex;
        }
        xhr.onerror = () => {
            console.log('REST request error');
        }
        xhr.send(data);   
    } 
    else {
        console.log('Using gRPC');

        const PredictModule = require('./proto/generated/tensorflow_serving/apis/predict_pb.js');
        const PredictionServiceClientModule = require('./proto/generated/tensorflow_serving/apis/prediction_service_grpc_web_pb.js');
        const ModelModule = require('./proto/generated/tensorflow_serving/apis/model_pb.js');
        const TensorModule = require('./proto/generated/tensorflow/core/framework/tensor_pb.js');

        const GPRCURL = 'http://localhost:8080';
        const stub = new PredictionServiceClientModule.PredictionServiceClient(GPRCURL);

        const modelSpec = new ModelModule.ModelSpec();
        modelSpec.setName('inception');

        const tensorProto = new TensorModule.TensorProto();
        const tensorShapeProto = new TensorModule.TensorShapeProto();

        const batchDim = (new TensorModule.TensorShapeProto.Dim()).setSize(1);
        const heightDim = (new TensorModule.TensorShapeProto.Dim()).setSize(inputImgHeight);
        const widthDim = (new TensorModule.TensorShapeProto.Dim()).setSize(inputImgWidth);
        const channelDim = (new TensorModule.TensorShapeProto.Dim()).setSize(3);

        tensorShapeProto.setDimList([batchDim, heightDim, widthDim, channelDim]);

        tensorProto.setDtype(proto.tensorflow.DataType.DT_FLOAT);
        tensorProto.setTensorShape(tensorShapeProto);
        context.drawImage(img, 0, 0);
        for(let i=0; i<inputImgHeight; i++) {
            for (let j=0; j<inputImgWidth; j++) {
                tensorProto.addFloatVal(context.getImageData(i, j, 1, 1).data[0]/255); 
                tensorProto.addFloatVal(context.getImageData(i, j, 1, 1).data[1]/255); 
                tensorProto.addFloatVal(context.getImageData(i, j, 1, 1).data[2]/255); 
            }
        }

        const predictionServiceRequest = new PredictModule.PredictRequest();
        predictionServiceRequest.setModelSpec(modelSpec);
        predictionServiceRequest.getInputsMap().set('inputs', tensorProto);

        stub.predict(predictionServiceRequest, {}, function(err, response) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            } 
            else {
                const maxIndex = argmax(response.getOutputsMap().get('logits').getFloatValList());
                document.getElementById('category').textContent = 'Predicted category: ' + maxIndex;
            }
        });
    }
}

function reset(){
    document.getElementById('category').textContent = '';
}

function argmax(probs) {
    let maxIndex = 0;
    let maxProb = probs[0];
    for (let i = 1; i < probs.length; i++) {
        if (probs[i] > maxProb) {
            maxIndex = i;
            maxProb = probs[i];
        }
    }    
    return maxIndex;
}
window.classify_img = classify_img;
window.reset = reset;