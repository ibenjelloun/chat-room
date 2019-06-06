import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage
} from '@nestjs/websockets';
import { AppService } from './app.service';
import { Message } from '@chat-room/api-interface';
import { Server } from 'http';

@WebSocketGateway(4001)
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  private logger = new Logger('AppGateway');

  constructor(private appService: AppService) {
    this.logger.log('constructor');
  }

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: any) {
    this.logger.log('Has disconnected');
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log('Connected');
    client.emit('messageToClient', this.appService.getMessages());
  }

  @SubscribeMessage('messageToServer')
  handleMessage(client: any, payload: Message): void {
    this.logger.log(payload);
    this.appService.addMessage(payload);
    this.wss.emit('messageToClient', this.appService.getMessages());
  }
}
