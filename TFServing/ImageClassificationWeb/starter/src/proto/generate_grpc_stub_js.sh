#!/bin/bash
# This script generates the client stub for TF Serving

touch generated
rm -rf generated
mkdir generated

protoc -I./ ./tensorflow_serving/apis/input.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/regression.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/predict.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/prediction_service.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/get_model_metadata.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/inference.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/model.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow_serving/apis/classification.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated

protoc -I./ ./tensorflow/core/framework/graph.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/tensor_shape.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/function.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/variable.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/types.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/full_type.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/versions.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/attr_value.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/op_def.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/node_def.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/tensor.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/framework/resource_handle.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/example/feature.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/example/example.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/protobuf/struct.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/protobuf/meta_graph.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/protobuf/saver.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/protobuf/trackable_object_graph.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
protoc -I./ ./tensorflow/core/protobuf/saved_object_graph.proto --js_out=import_style=commonjs:./generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated
