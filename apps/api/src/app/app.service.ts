import { Injectable } from '@nestjs/common';
import { Message } from '@chat-room/api-interface';

@Injectable()
export class AppService {

  messages: Message[] = [];

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(message: Message): Message {
    this.messages.push(message);
    this.messages = this.messages.reverse().slice(0, 60).reverse();
    return message;
  }
}
