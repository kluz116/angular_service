import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../feeds.service'

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers:[FeedsService]
})
export class FirstComponentComponent implements OnInit {
   getMyCarsFromServer:string;
    postMyCarToServer:string;
 
    productCode:string;
    productName:string;
    productLine:string = "BMW 1 series";
    buyPrice:number;
   constructor(private _httpCarService: FeedsService) { }

   getDataFromServer (){
        this._httpCarService.getCarsRestful()
            .subscribe(
                data => this.getMyCarsFromServer = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP GET Service"), // in case of failure show this message
                () => console.log("Job Done Get !")//run this code in all cases
            );
    }
  postDataToServer (){
        this._httpCarService.postCarRestful(this.productCode,this.productName,this.productLine,this.buyPrice).subscribe(//call the post
                data => this.postMyCarToServer = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }

  ngOnInit() {
  }

}
