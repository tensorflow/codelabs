/**
 * @fileoverview gRPC-Web generated client stub for tensorflow.serving
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var tensorflow_serving_apis_classification_pb = require('../../tensorflow_serving/apis/classification_pb.js')

var tensorflow_serving_apis_get_model_metadata_pb = require('../../tensorflow_serving/apis/get_model_metadata_pb.js')

var tensorflow_serving_apis_inference_pb = require('../../tensorflow_serving/apis/inference_pb.js')

var tensorflow_serving_apis_predict_pb = require('../../tensorflow_serving/apis/predict_pb.js')

var tensorflow_serving_apis_regression_pb = require('../../tensorflow_serving/apis/regression_pb.js')
const proto = {};
proto.tensorflow = {};
proto.tensorflow.serving = require('./prediction_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.PredictionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tensorflow.serving.PredictionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.ClassificationRequest,
 *   !proto.tensorflow.serving.ClassificationResponse>}
 */
const methodDescriptor_PredictionService_Classify = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.PredictionService/Classify',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_classification_pb.ClassificationRequest,
  tensorflow_serving_apis_classification_pb.ClassificationResponse,
  /**
   * @param {!proto.tensorflow.serving.ClassificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_classification_pb.ClassificationResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.ClassificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tensorflow.serving.ClassificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.ClassificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.classify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Classify',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Classify,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.ClassificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.ClassificationResponse>}
 *     Promise that resolves to the response
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.classify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Classify',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Classify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.RegressionRequest,
 *   !proto.tensorflow.serving.RegressionResponse>}
 */
const methodDescriptor_PredictionService_Regress = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.PredictionService/Regress',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_regression_pb.RegressionRequest,
  tensorflow_serving_apis_regression_pb.RegressionResponse,
  /**
   * @param {!proto.tensorflow.serving.RegressionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_regression_pb.RegressionResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.RegressionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tensorflow.serving.RegressionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.RegressionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.regress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Regress',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Regress,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.RegressionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.RegressionResponse>}
 *     Promise that resolves to the response
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.regress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Regress',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Regress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.PredictRequest,
 *   !proto.tensorflow.serving.PredictResponse>}
 */
const methodDescriptor_PredictionService_Predict = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.PredictionService/Predict',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_predict_pb.PredictRequest,
  tensorflow_serving_apis_predict_pb.PredictResponse,
  /**
   * @param {!proto.tensorflow.serving.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_predict_pb.PredictResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tensorflow.serving.PredictResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.PredictResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.predict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Predict,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.PredictResponse>}
 *     Promise that resolves to the response
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.predict =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Predict);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.MultiInferenceRequest,
 *   !proto.tensorflow.serving.MultiInferenceResponse>}
 */
const methodDescriptor_PredictionService_MultiInference = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.PredictionService/MultiInference',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_inference_pb.MultiInferenceRequest,
  tensorflow_serving_apis_inference_pb.MultiInferenceResponse,
  /**
   * @param {!proto.tensorflow.serving.MultiInferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_inference_pb.MultiInferenceResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tensorflow.serving.MultiInferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.MultiInferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.multiInference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/MultiInference',
      request,
      metadata || {},
      methodDescriptor_PredictionService_MultiInference,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.MultiInferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.MultiInferenceResponse>}
 *     Promise that resolves to the response
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.multiInference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/MultiInference',
      request,
      metadata || {},
      methodDescriptor_PredictionService_MultiInference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tensorflow.serving.GetModelMetadataRequest,
 *   !proto.tensorflow.serving.GetModelMetadataResponse>}
 */
const methodDescriptor_PredictionService_GetModelMetadata = new grpc.web.MethodDescriptor(
  '/tensorflow.serving.PredictionService/GetModelMetadata',
  grpc.web.MethodType.UNARY,
  tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataRequest,
  tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse,
  /**
   * @param {!proto.tensorflow.serving.GetModelMetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.tensorflow.serving.GetModelMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tensorflow.serving.GetModelMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tensorflow.serving.GetModelMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tensorflow.serving.PredictionServiceClient.prototype.getModelMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/GetModelMetadata',
      request,
      metadata || {},
      methodDescriptor_PredictionService_GetModelMetadata,
      callback);
};


/**
 * @param {!proto.tensorflow.serving.GetModelMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tensorflow.serving.GetModelMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.tensorflow.serving.PredictionServicePromiseClient.prototype.getModelMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tensorflow.serving.PredictionService/GetModelMetadata',
      request,
      metadata || {},
      methodDescriptor_PredictionService_GetModelMetadata);
};


module.exports = proto.tensorflow.serving;

