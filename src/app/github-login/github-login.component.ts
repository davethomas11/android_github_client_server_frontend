import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.css']
})
export class GithubLoginComponent implements OnInit {

  title = 'Dave\'s GitHub Client';
  githubUrl = `https://github.com/login/oauth/authorize?scope=${scopes}&client_id=${client_id}`;

  constructor() { }

  ngOnInit() {
    
  }
}

let scopes = "user,repo";
let client_id = "";