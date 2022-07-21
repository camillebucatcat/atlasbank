import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.page.html',
  styleUrls: ['./mailing-address.page.scss'],
})
export class MailingAddressPage implements OnInit {
  presentingElement = null;

  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

}
