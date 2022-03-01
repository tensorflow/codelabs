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

    } 
    else {
        console.log('Using gRPC');

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