import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  login() {
    this.authenticationService.authentication(this.user);
  }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
