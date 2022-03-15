#  Web sample to demontrate sending requests to TF Serving

This web sample project demos how to send a reqeust, via REST or gRPC, to a
TF Serving backend from a web frontend. TF Serving run a pretrained [Inception v3](https://tfhub.dev/google/imagenet/inception_v3/classification/5)
model, which classifies the input image.

## Usage

1. Download the Inception v3 SavedModel from [TFHub](https://tfhub.dev/google/imagenet/inception_v3/classification/5)
   and extract the SavedModel into a versioned folder.
2. Start TF Serving with:
`docker run -t --rm -p 8501:8501 -p 8500:8500 -v "/PATH/TO/SAVEDMODEL:/models/inception" -e MODEL_NAME=inception tensorflow/serving`
3. Start Envoy:
`docker run --add-host host.docker.internal:host-gateway --rm -it -p 9901:9901 -p 8000:8000 -p 8080:8080 -v PATH/TO/envoy-custom.yaml:/envoy-custom.yaml envoyproxy/envoy-dev:fd3e8370ddb7a96634c192d1461516e6de1d1797 -c /envoy-custom.yaml`
4. Install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) 
   extension and start a web server to load the folder that contains 
   index.html. Leave the default port at 8887. 
5. Run 'npm install'.
6. Download [gRCP code generator plugin](https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-linux-x86_64)
   go into src/proto folder to run 'generate_js.sh'.
7. Run 'npx webpack' at the top level to generate the bundle file in 
   dist/main.js.
6. Open '127.0.0.1:8887' in browser.
