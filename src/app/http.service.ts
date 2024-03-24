import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tournament } from './tournament';
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService{

    tournaments: Tournament[] = [];
    headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('ngrok-skip-browser-warning', '69420');
        
    constructor(private http: HttpClient){}
      
    getTournaments() : Observable<Tournament[]>{
        return this.http.get("https://mammal-ace-snipe.ngrok-free.app/api/tournaments", {'headers': this.headers}).pipe(map((data:any)=>{
            return data.map(function(tournament: any): Tournament {
                return new Tournament(
                    tournament.nameTournament, 
                    tournament.descTournament, 
                    tournament.poolTournament, 
                    tournament.players == null ? 0 : tournament.players.length, 
                    tournament.maxPlayersTournament,
                );
              });
        }));
    }

    postTournament(tournament: Tournament){
        const body = {
            nameTournament: tournament.name, 
            descTournament: tournament.description,
            poolTournament: tournament.prizeFund, 
            maxPlayersTournament: tournament.maxPlayers,
        };
        return this.http.post("https://mammal-ace-snipe.ngrok-free.app/api/tournaments", body, {'headers': this.headers}); 
    }
}