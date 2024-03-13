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
		{ name: "Чемпионат по доте", description: "Сразитесь в легендарном поединке с лучшими игроками региона", dateTime: "12.03.2024 10:00" },
		{ name: "Турнир по CS:GO", description: "Сразитесь в легендарном поединке с лучшими игроками региона", dateTime: "13.03.2024 10:00" },
		{ name: "Соревнование по шахматам", description: "Сразитесь в легендарном поединке с лучшими игроками региона", dateTime: "15.03.2024 9:00" },
	];
	readonly columns = Object.keys(this.tournaments[0]);
	
	constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getTournaments().subscribe({next:(data: Tournament[]) => this.tournaments=data});
    }
}
