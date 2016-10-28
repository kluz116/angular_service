import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class FeedsService {
private _carsUrl:string = "http://0.0.0.0:3000/api/cars";
private url = 'https://jsonplaceholder.typicode.com/users';
private comment_url = 'https://jsonplaceholder.typicode.com/comments';
private url_photos = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http:Http) {

   }

   getFeed(){
    return this.http.get(this.url)
       .map(response=>response.json());
   }
   getComment(){
     return this.http.get(this.comment_url)
       .map(res=>res.json());
   }
   getImages(){
     return this.http.get(this.url_photos)
       .map(res=>res.json());
   }
    getCarsRestful(){
        return this.http.get(this._carsUrl).map(res => res.json());
    }
   postCarRestful(productCode:string,productName:string,productLine:string,buyPrice:number ){
 
        let body = JSON.stringify({ "productCode":productCode,"productName":productName,"productLine":productLine,"buyPrice":buyPrice });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
 
        return this.http.post(this._carsUrl, body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
