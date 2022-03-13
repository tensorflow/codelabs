# Android sample to demonstrate sending requests to TF Serving

This sample Android app demonstrates how to send a request, via REST or gRPC to
a backend that runs TensorFlow Serving. It sends the RGB values of a sample cat image in a request 
to TF Serving. TF Serving runs a pretrained
[SSD mobilenet model](https://tfhub.dev/tensorflow/ssd_mobilenet_v2/fpnlite_320x320/1).
and returns the result back to the app to display the detection result in the
UI.

## Requirements

*   Android Studio 4+ (installed on a Linux, Mac or Windows machine)
*   An Android device, or an Android Emulator

## Build and run
To run the app:
1. Download the pretrained SavedModel
[SSD mobilenet model](https://tfhub.dev/tensorflow/ssd_mobilenet_v2/fpnlite_320x320/1)
and extract it to a versioned folder
2. Start TF Serving using:
```
docker run -it --rm -p 8500:8500 -p 8501:8501 -v "PATH/TO/SAVEDMODEL:/models/ssd_mobilenet_v2_2" -e MODEL_NAME=ssd_mobilenet_v2_2 tensorflow/serving
```
3. Run the app in Android Studio
4. If you are not using an Android emulator, make sure to replace '10.0.2.2'
with your TF Serving host's IP address
