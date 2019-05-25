import { Injectable } from "@nestjs/common";
import { Message } from "@chat-room/api-interface";

@Injectable()
export class AppService {
  getData(): Message {
    return { message: "Welcome to api!" };
  }
}
