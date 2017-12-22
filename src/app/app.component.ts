import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dave\'s GitHub Client';
  githubUrl = `https://github.com/login/oauth/authorize?scope=${scopes}&client_id=${client_id}`;
}

let scopes = "user,repo";
let client_id = "";
