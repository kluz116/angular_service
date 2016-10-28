import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../feeds.service'
@Component({
  selector: 'app-secound-component',
  templateUrl: './secound-component.component.html',
  styleUrls: ['./secound-component.component.css'],
  providers:[FeedsService]
})
export class SecoundComponentComponent implements OnInit {
 private photos:any;
  constructor(private feed : FeedsService) { 
     
  }

  ngOnInit() {
    this.feed.getImages().subscribe(photos=>{
       this.photos=photos;
     })
  }

}
