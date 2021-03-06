// source: tensorflow/core/framework/full_type.proto
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

goog.exportSymbol('proto.tensorflow.FullTypeDef', null, global);
goog.exportSymbol('proto.tensorflow.FullTypeDef.AttrCase', null, global);
goog.exportSymbol('proto.tensorflow.FullTypeId', null, global);
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
proto.tensorflow.FullTypeDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.FullTypeDef.repeatedFields_, proto.tensorflow.FullTypeDef.oneofGroups_);
};
goog.inherits(proto.tensorflow.FullTypeDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.FullTypeDef.displayName = 'proto.tensorflow.FullTypeDef';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.FullTypeDef.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensorflow.FullTypeDef.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.tensorflow.FullTypeDef.AttrCase = {
  ATTR_NOT_SET: 0,
  S: 3,
  I: 4
};

/**
 * @return {proto.tensorflow.FullTypeDef.AttrCase}
 */
proto.tensorflow.FullTypeDef.prototype.getAttrCase = function() {
  return /** @type {proto.tensorflow.FullTypeDef.AttrCase} */(jspb.Message.computeOneofCase(this, proto.tensorflow.FullTypeDef.oneofGroups_[0]));
};



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
proto.tensorflow.FullTypeDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.FullTypeDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.FullTypeDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FullTypeDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    proto.tensorflow.FullTypeDef.toObject, includeInstance),
    s: jspb.Message.getFieldWithDefault(msg, 3, ""),
    i: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.tensorflow.FullTypeDef}
 */
proto.tensorflow.FullTypeDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.FullTypeDef;
  return proto.tensorflow.FullTypeDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.FullTypeDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.FullTypeDef}
 */
proto.tensorflow.FullTypeDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tensorflow.FullTypeId} */ (reader.readEnum());
      msg.setTypeId(value);
      break;
    case 2:
      var value = new proto.tensorflow.FullTypeDef;
      reader.readMessage(value,proto.tensorflow.FullTypeDef.deserializeBinaryFromReader);
      msg.addArgs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setS(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setI(value);
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
proto.tensorflow.FullTypeDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.FullTypeDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.FullTypeDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.FullTypeDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tensorflow.FullTypeDef.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional FullTypeId type_id = 1;
 * @return {!proto.tensorflow.FullTypeId}
 */
proto.tensorflow.FullTypeDef.prototype.getTypeId = function() {
  return /** @type {!proto.tensorflow.FullTypeId} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tensorflow.FullTypeId} value
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated FullTypeDef args = 2;
 * @return {!Array<!proto.tensorflow.FullTypeDef>}
 */
proto.tensorflow.FullTypeDef.prototype.getArgsList = function() {
  return /** @type{!Array<!proto.tensorflow.FullTypeDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.FullTypeDef, 2));
};


/**
 * @param {!Array<!proto.tensorflow.FullTypeDef>} value
 * @return {!proto.tensorflow.FullTypeDef} returns this
*/
proto.tensorflow.FullTypeDef.prototype.setArgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tensorflow.FullTypeDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.FullTypeDef}
 */
proto.tensorflow.FullTypeDef.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tensorflow.FullTypeDef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional string s = 3;
 * @return {string}
 */
proto.tensorflow.FullTypeDef.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.setS = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.tensorflow.FullTypeDef.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.clearS = function() {
  return jspb.Message.setOneofField(this, 3, proto.tensorflow.FullTypeDef.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.FullTypeDef.prototype.hasS = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 i = 4;
 * @return {number}
 */
proto.tensorflow.FullTypeDef.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.setI = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.tensorflow.FullTypeDef.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tensorflow.FullTypeDef} returns this
 */
proto.tensorflow.FullTypeDef.prototype.clearI = function() {
  return jspb.Message.setOneofField(this, 4, proto.tensorflow.FullTypeDef.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.FullTypeDef.prototype.hasI = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.tensorflow.FullTypeId = {
  TFT_UNSET: 0,
  TFT_VAR: 1,
  TFT_ANY: 2,
  TFT_PRODUCT: 3,
  TFT_NAMED: 4,
  TFT_FOR_EACH: 20,
  TFT_CALLABLE: 100,
  TFT_TENSOR: 1000,
  TFT_ARRAY: 1001,
  TFT_OPTIONAL: 1002,
  TFT_LITERAL: 1003,
  TFT_BOOL: 200,
  TFT_UINT8: 201,
  TFT_UINT16: 202,
  TFT_UINT32: 203,
  TFT_UINT64: 204,
  TFT_INT8: 205,
  TFT_INT16: 206,
  TFT_INT32: 207,
  TFT_INT64: 208,
  TFT_HALF: 209,
  TFT_FLOAT: 210,
  TFT_DOUBLE: 211,
  TFT_BFLOAT16: 215,
  TFT_COMPLEX64: 212,
  TFT_COMPLEX128: 213,
  TFT_STRING: 214,
  TFT_DATASET: 10102,
  TFT_RAGGED: 10103,
  TFT_MUTEX_LOCK: 10202,
  TFT_LEGACY_VARIANT: 10203
};

goog.object.extend(exports, proto.tensorflow);
