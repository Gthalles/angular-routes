import { Component } from '@angular/core';
import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routes';

  showMenu: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }
}
