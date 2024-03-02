import { NumberSymbol } from "@angular/common";
import { Component } from "@angular/core";
import {FormsModule} from "@angular/forms";
     
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    nameTournament: string = "";
    namePlayer: string = "";
    countPlayers: number = 0;
    players: string[] = [];
    createTournament(name: string, players: string[]): void {
        
    }
    addPlayer(namePlayer: string): void {
        this.players.push(namePlayer);
        this.countPlayers += 1;
        this.namePlayer = "";
    }
}