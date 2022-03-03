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
        // TODO: add code to send a REST request to TF Serving

    } 
    else {
        console.log('Using gRPC');
        // TODO: add code to send a gRPC request to TF Serving

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
