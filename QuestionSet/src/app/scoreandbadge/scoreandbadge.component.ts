import { Component, OnInit } from '@angular/core';
import { ScorebadgeService } from '../scorebadge.service';
// import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-scoreandbadge',
  templateUrl: './scoreandbadge.component.html',
  styleUrls: ['./scoreandbadge.component.css']
})
export class ScoreandbadgeComponent implements OnInit {

  // to remove during integration
  username = 'ram';

  public userData = {};
  constructor(public scorebadgeservice: ScorebadgeService /*, private token: TokenStorageService*/) { }
 // uncomment during integration
 // public username = this.token.getUsername();

  ngOnInit() {
    this.scorebadgeservice.getUserData(this.username).subscribe(
      data => {
       this.userData = data;
        console.log('data is ', data);
    },
      error => {
        alert(error);
      }
    );
  }

}
