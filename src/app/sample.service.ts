import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class SampleService {
 private url='https://jsonplaceholder.typicode.com/albums';
  constructor(private _http : Http) { }

  getSampleData(){
    return this._http.get(this.url)
              .map(res=>res.json());
  }

}
