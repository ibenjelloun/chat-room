import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@chat-room/api-interface';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private socket: Socket) {}

  addMessage(message: Message): void {
    this.socket.emit('messageToServer', message);
  }

  getMessages(): Observable<Message[]> {
    return this.socket.fromEvent<Message[]>('messageToClient');
  }
}
