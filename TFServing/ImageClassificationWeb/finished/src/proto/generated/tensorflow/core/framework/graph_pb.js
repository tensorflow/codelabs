// source: tensorflow/core/framework/graph.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var tensorflow_core_framework_function_pb = require('../../../tensorflow/core/framework/function_pb.js');
goog.object.extend(proto, tensorflow_core_framework_function_pb);
var tensorflow_core_framework_node_def_pb = require('../../../tensorflow/core/framework/node_def_pb.js');
goog.object.extend(proto, tensorflow_core_framework_node_def_pb);
var tensorflow_core_framework_versions_pb = require('../../../tensorflow/core/framework/versions_pb.js');
goog.object.extend(proto, tensorflow_core_framework_versions_pb);
goog.exportSymbol('proto.tensorflow.GraphDef', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorflow.GraphDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.GraphDef.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.GraphDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.GraphDef.displayName = 'proto.tensorflow.GraphDef';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.GraphDef.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.GraphDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.GraphDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.GraphDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GraphDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeList: jspb.Message.toObjectList(msg.getNodeList(),
    tensorflow_core_framework_node_def_pb.NodeDef.toObject, includeInstance),
    versions: (f = msg.getVersions()) && tensorflow_core_framework_versions_pb.VersionDef.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    library: (f = msg.getLibrary()) && tensorflow_core_framework_function_pb.FunctionDefLibrary.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorflow.GraphDef}
 */
proto.tensorflow.GraphDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.GraphDef;
  return proto.tensorflow.GraphDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.GraphDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.GraphDef}
 */
proto.tensorflow.GraphDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_framework_node_def_pb.NodeDef;
      reader.readMessage(value,tensorflow_core_framework_node_def_pb.NodeDef.deserializeBinaryFromReader);
      msg.addNode(value);
      break;
    case 4:
      var value = new tensorflow_core_framework_versions_pb.VersionDef;
      reader.readMessage(value,tensorflow_core_framework_versions_pb.VersionDef.deserializeBinaryFromReader);
      msg.setVersions(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_function_pb.FunctionDefLibrary;
      reader.readMessage(value,tensorflow_core_framework_function_pb.FunctionDefLibrary.deserializeBinaryFromReader);
      msg.setLibrary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.GraphDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.GraphDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.GraphDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GraphDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorflow_core_framework_node_def_pb.NodeDef.serializeBinaryToWriter
    );
  }
  f = message.getVersions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tensorflow_core_framework_versions_pb.VersionDef.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLibrary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_function_pb.FunctionDefLibrary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodeDef node = 1;
 * @return {!Array<!proto.tensorflow.NodeDef>}
 */
proto.tensorflow.GraphDef.prototype.getNodeList = function() {
  return /** @type{!Array<!proto.tensorflow.NodeDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_node_def_pb.NodeDef, 1));
};


/**
 * @param {!Array<!proto.tensorflow.NodeDef>} value
 * @return {!proto.tensorflow.GraphDef} returns this
*/
proto.tensorflow.GraphDef.prototype.setNodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.NodeDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NodeDef}
 */
proto.tensorflow.GraphDef.prototype.addNode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.NodeDef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.GraphDef} returns this
 */
proto.tensorflow.GraphDef.prototype.clearNodeList = function() {
  return this.setNodeList([]);
};


/**
 * optional VersionDef versions = 4;
 * @return {?proto.tensorflow.VersionDef}
 */
proto.tensorflow.GraphDef.prototype.getVersions = function() {
  return /** @type{?proto.tensorflow.VersionDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_versions_pb.VersionDef, 4));
};


/**
 * @param {?proto.tensorflow.VersionDef|undefined} value
 * @return {!proto.tensorflow.GraphDef} returns this
*/
proto.tensorflow.GraphDef.prototype.setVersions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.GraphDef} returns this
 */
proto.tensorflow.GraphDef.prototype.clearVersions = function() {
  return this.setVersions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.GraphDef.prototype.hasVersions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 version = 3;
 * @return {number}
 */
proto.tensorflow.GraphDef.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.GraphDef} returns this
 */
proto.tensorflow.GraphDef.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional FunctionDefLibrary library = 2;
 * @return {?proto.tensorflow.FunctionDefLibrary}
 */
proto.tensorflow.GraphDef.prototype.getLibrary = function() {
  return /** @type{?proto.tensorflow.FunctionDefLibrary} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_function_pb.FunctionDefLibrary, 2));
};


/**
 * @param {?proto.tensorflow.FunctionDefLibrary|undefined} value
 * @return {!proto.tensorflow.GraphDef} returns this
*/
proto.tensorflow.GraphDef.prototype.setLibrary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.GraphDef} returns this
 */
proto.tensorflow.GraphDef.prototype.clearLibrary = function() {
  return this.setLibrary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.GraphDef.prototype.hasLibrary = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.tensorflow);
