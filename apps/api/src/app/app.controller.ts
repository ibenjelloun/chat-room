import { Controller, Get, Post, Body, HttpCode, Logger } from '@nestjs/common';

import { Message } from '@chat-room/api-interface';

import { AppService } from './app.service';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {
  }

  @Get('messages')
  getMessages(): Message[] {
    return this.appService.getMessages();
  }

  @Post('messages')
  @HttpCode(204)
  addMessage(@Body() message: Message): Message {
    return this.appService.addMessage(message);
  }
}
