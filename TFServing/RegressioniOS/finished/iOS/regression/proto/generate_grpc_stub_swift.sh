#!/bin/bash
# This script generates the client stub for TF Serving

touch generated
rm -rf generated
mkdir -p generated/import

protoc --proto_path=. ./tensorflow_serving/apis/input.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/regression.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/predict.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/prediction_service.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/get_model_metadata.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/inference.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/model.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow_serving/apis/classification.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated

protoc --proto_path=. ./tensorflow/core/framework/graph.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/tensor_shape.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/function.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/variable.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/types.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/full_type.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/versions.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/attr_value.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/op_def.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/node_def.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/tensor.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/framework/resource_handle.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/example/feature.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/example/example.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/protobuf/struct.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/protobuf/meta_graph.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/protobuf/saver.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/protobuf/trackable_object_graph.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated
protoc --proto_path=. ./tensorflow/core/protobuf/saved_object_graph.proto --plugin=/usr/local/bin/protoc-gen-grpc-swift --grpc-swift_opt=Visibility=Public --grpc-swift_out=./generated --swift_opt=Visibility=Public --swift_out=./generated

find ./generated/tensorflow ./generated/tensorflow_serving -name *.swift -exec cp {} ./generated/import \;
