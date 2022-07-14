import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-password-only',
  templateUrl: './login-password-only.page.html',
  styleUrls: ['./login-password-only.page.scss'],
})
export class LoginPasswordOnlyPage implements OnInit {
  presentingElement = null;
  showPassword = false;
  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

}
