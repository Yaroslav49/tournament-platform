import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tournament } from './tournament';
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService{

    tournaments: Tournament[] = [];
  
    constructor(private http: HttpClient){}
      
    getTournaments() : Observable<Tournament[]>{
        return this.http.get("http://158.160.149.44:8080/api/tournaments").pipe(map((data:any)=>{
            //let tournamentList = data;
            return data.map(function(tournament: any): Tournament {
                return new Tournament(tournament.nameTournament, tournament.descTournament);
              });
        }));
    }
}