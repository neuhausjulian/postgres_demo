// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');

function serialize_users_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_Void(arg) {
  if (!(arg instanceof users_pb.Void)) {
    throw new Error('Expected argument of type users.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Void(buffer_arg) {
  return users_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getAll: {
    path: '/users.Users/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Void,
    responseType: users_pb.User,
    requestSerialize: serialize_users_Void,
    requestDeserialize: deserialize_users_Void,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
