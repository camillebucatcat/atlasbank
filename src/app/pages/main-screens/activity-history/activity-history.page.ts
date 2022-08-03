import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-history',
  templateUrl: './activity-history.page.html',
  styleUrls: ['./activity-history.page.scss'],
})
export class ActivityHistoryPage implements OnInit {
  presentingElement = null;
  constructor() { }
  
  ngOnInit() {
  this.presentingElement = document.querySelector('.ion-page');
  }

}
