# iOS sample to demonstrate sending requests to TF Serving
This iOS sample project demos how to call TF Serving from an iOS app, via REST
and gRPC. You can input a value and it will send the input to TF Serving and
return a precited regression value.

## Usage

1. Go into 'ML' folder and open the Jupyter notebook (make sure you have 
   TensorFlow installed).
2. Train model and export SavedModel inside the notebook.
3. Start docker:
`docker run -t --rm -p 8501:8501 -p 8500:8500 -v "/PATH/TO/SAVEDMODEL:/models/regression" -e MODEL_NAME=regression tensorflow/serving`.
4. Install Swift code generator plugin by running 'brew install swift-protobuf grpc-swift'
5. Go into 'iOS/regression/proto' folder and run './generate_grpc_stub_swift.sh' to 
   generate gRPC client stub code.
6. Run 'pod install'. Open 'regression.xcworkspace/' with XCode. Drag the 
   generated Swift code in generated/import folder into Xcode.
7. Run the app.
