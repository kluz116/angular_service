import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../feeds.service'

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
  providers:[FeedsService]
})
export class FeedsComponent implements OnInit {
 private users:any;
  constructor( private feedService : FeedsService) {
    this.feedService.getFeed().subscribe(users=>{
      this.users=users;
    });
   }

  ngOnInit() {
  }

}
