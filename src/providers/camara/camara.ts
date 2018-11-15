import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/take';

@Injectable()
export class CamaraProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CamaraProvider Provider');
  }

}
