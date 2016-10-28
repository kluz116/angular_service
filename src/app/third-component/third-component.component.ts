import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../feeds.service'

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  providers:[FeedsService]
})
export class ThirdComponentComponent implements OnInit {
private comments:any;
  constructor(private feeds : FeedsService) { 
      this.feeds.getComment().subscribe(comments=>{
        this.comments = comments;
      });
      }

  ngOnInit() {
  }

}
