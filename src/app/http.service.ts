import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tournament } from './tournament';
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService{

    idTournament: number = 0;

    headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('ngrok-skip-browser-warning', '69420');
        
    constructor(private http: HttpClient){}
      
    getTournaments(): Observable<Tournament[]>{
        return this.http.get("https://mammal-ace-snipe.ngrok-free.app/api/tournaments", {'headers': this.headers}).pipe(map((data:any)=>{
            return data.map(function(tournament: any): Tournament {
                return new Tournament(
                    tournament.id,
                    tournament.nameTournament,
                    tournament.descTournament,
                    (tournament.poolTournament == null) ? 0 : tournament.poolTournament,
                    (tournament.players == null) ? 0 : tournament.players.length,
                    (tournament.maxPlayersTournament == null) ? 0 : tournament.maxPlayersTournament,
                    tournament.password,
                    tournament.players,
                    tournament.matches
                );
              });
        }));
    }

    getTournamentById(id: number): Observable<Tournament>{
        return this.http.get("https://mammal-ace-snipe.ngrok-free.app/api/tournaments/" + id, {'headers': this.headers}).pipe(map((tournament:any)=>{
            return new Tournament(
                tournament.id,
                tournament.nameTournament,
                tournament.descTournament,
                (tournament.poolTournament == null) ? 0 : tournament.poolTournament,
                (tournament.players == null) ? 0 : tournament.players.length,
                (tournament.maxPlayersTournament == null) ? 0 : tournament.maxPlayersTournament,
                tournament.password,
                tournament.players,
                tournament.matches
            );
        }));
    }

    postTournament(tournament: Tournament): Observable<Tournament> {
        const body = {
            nameTournament: tournament.name, 
            descTournament: tournament.description,
            poolTournament: tournament.prizeFund, 
            maxPlayersTournament: tournament.maxPlayers,
            password: tournament.password,
        };
        return this.http.post("https://mammal-ace-snipe.ngrok-free.app/api/tournaments", body, {'headers': this.headers}).pipe(map((tournament:any)=>{
            return new Tournament(
                tournament.id,
                tournament.nameTournament,
                tournament.descTournament,
                (tournament.poolTournament == null) ? 0 : tournament.poolTournament,
                (tournament.players == null) ? 0 : tournament.players.length,
                (tournament.maxPlayersTournament == null) ? 0 : tournament.maxPlayersTournament,
                tournament.password,
                tournament.players,
                tournament.matches
            );
        }));; 
    }

    postParticipant(idTournament: number, nickname: String) {
        const body = {
            nickname: nickname
        };
        return this.http.post("https://mammal-ace-snipe.ngrok-free.app/api/tournaments/" + idTournament + "/participants", body, {'headers': this.headers});
    }

}