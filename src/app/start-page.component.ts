import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";
import { Tournament } from './tournament';

@Component({
	selector: 'app-start-page.component',
	templateUrl: './start-page.component.html',
	styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  	countTournaments: number = 3;
	tournaments: Tournament[] = [
		{id: 0,  name: "Чемпионат по доте", description: "Сразитесь в легендарном поединке с лучшими игроками региона", 
		dateTime: "12.03.2024 10:00", prizeFund: 100, countPlayers: 0, maxPlayers: 12, password: "123", participants: null, matches: null},
		
		{id: 0, name: "Турнир по CS:GO", description: "Сразитесь в легендарном поединке с лучшими игроками региона", 
		dateTime: "13.03.2024 10:00", prizeFund: 100, countPlayers: 0, maxPlayers: 12, password: "123", participants: null, matches: null},

		{id: 0, name: "Соревнование по шахматам", description: "Сразитесь в легендарном поединке с лучшими игроками региона", 
		dateTime: "15.03.2024 9:00", prizeFund: 100, countPlayers: 0, maxPlayers: 12, password: "123", participants: null, matches: null},
	];
	treeList: number[] = [];
	readonly columns = Object.keys(this.tournaments[0]);
	
	constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getTournaments().subscribe({next:(data: Tournament[]) => this.tournaments=data});
    }

	saveIdTournament(id: number) {
		this.httpService.idTournament = id;
	}

	
	bypass(n: number): void {
		if (n > 1) {
			this.bypass(n-1);
			this.treeList.push(n);
			this.bypass(n-1);
		} else {
			this.treeList.push(1);
		}
	}

	createTreeList(size: number): number[] {
		this.treeList = [];
		this.bypass(size);
		return this.treeList;
	}
}
