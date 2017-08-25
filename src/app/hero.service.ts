import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  findAll() {
    return this.http.get('http://rest-service.guides.spring.io/greeting')
      .map(res => res.json());
  }
}