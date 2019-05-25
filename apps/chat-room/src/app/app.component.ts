import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@chat-room/api-interface";

@Component({
  selector: "chat-room-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  hello$ = this.http.get<Message>("/api/hello");
  constructor(private http: HttpClient) {}
}
