import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '@chat-room/api-interface';

@Component({
  selector: 'chat-room-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages$: Observable<Message[]>;
  currentMessage = '';
  user = 'anonymous' + new Date().getTime();
  color = '#333333';

  constructor(private messagesService: MessagesService) {
    this.messages$ = this.messagesService
      .getMessages()
      .pipe(map(messages => messages.reverse()));
  }

  sendMessage() {
    this.messagesService.addMessage({
      message: this.currentMessage,
      user: this.user,
      color: this.color,
      creationDate: new Date().toISOString()
    });
    this.currentMessage = '';
  }

  trackByFn(index, item: Message) {
    return item.creationDate.toString();
  }
}
