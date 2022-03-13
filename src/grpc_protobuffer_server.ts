import { sendUnaryData, ServerUnaryCall, Server, ServerCredentials } from '@grpc/grpc-js';
import services from './proto/users_grpc_pb';
import { Void, User } from './proto/users_pb';

export class GrpcProtobufferServer {    

    private server: any;

    public GrpcProtobufferServer() {
        
    }

    private getAllUsers(call: ServerUnaryCall<Void, User>, callback: sendUnaryData<User>) {
        const user = new User();
        user.setId(1);
        user.setName('TestUser');
        callback(null, user);
    }

    public start() {
        const server = new Server();
        server.addService(services.UsersService, {getAll: this.getAllUsers});
        server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
            server.start();        
        });
        this.server = server;
    }
}