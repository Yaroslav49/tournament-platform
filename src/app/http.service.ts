import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tournament } from './tournament';

@Injectable()
export class HttpService{

    tournaments: Tournament[] = [];
  
    constructor(private http: HttpClient){}
      
    getTournaments(){
        return this.http.get("http://158.160.149.44:8080/api/tournaments")
    }
}