// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as users_pb from "./users_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: IUsersService_IGetAll;
}

interface IUsersService_IGetAll extends grpc.MethodDefinition<users_pb.Void, users_pb.User> {
    path: "/users.Users/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.Void>;
    requestDeserialize: grpc.deserialize<users_pb.Void>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getAll: grpc.handleUnaryCall<users_pb.Void, users_pb.User>;
}

export interface IUsersClient {
    getAll(request: users_pb.Void, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getAll(request: users_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getAll(request: users_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: users_pb.Void, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getAll(request: users_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getAll(request: users_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}
