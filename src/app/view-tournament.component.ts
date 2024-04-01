import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from "./http.service";
import { Tournament } from './tournament';
import { Router } from "@angular/router";
import { Match } from './match';


@Component({
	selector: 'view-tournament.component',
	templateUrl: './view-tournament.component.html',
	styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {
	nameTournament: String = "Чемпионат по доте";
	description: String = "Сразитесь в легендарном поединке с лучшими игроками региона";
	datetime: String = "26.03.2024 19:00";
	inputForm = new FormGroup(
		{
			newParticipant: new FormControl('', {nonNullable: true})
		}
	)

	constructor(private router: Router, private httpService: HttpService){}

	tournamentInfo: Tournament = new Tournament(
		0,
		"Чемпионат по доте", 
		"Сразитесь в легендарном поединке с лучшими игроками региона", 
		100, 0, 8, "123", null, null
	);

	grid: string[][] = [];

	ngOnInit(){
        this.httpService.getTournamentById(this.httpService.idTournament).subscribe({
			next:(data: Tournament) => {
				console.log(data);
				this.tournamentInfo=data;
			},
			error: error => console.log(error)
		});
    }

	/*createGridMatrix(matches: Match[]): void {
		for (let match of matches) {
			this.grid[match.round].push(match.playerIds)
		}
	}*/

	addParticipant(): void {
		this.httpService.postParticipant(this.tournamentInfo.id, this.inputForm.controls["newParticipant"].value)
		.subscribe({
			next:(data: any) => {
				console.log("fantastic!");
				console.log(data);
				this.router.navigate(["/open"]);
			},
			error: error => console.log(error)
		});
		this.inputForm.controls["newParticipant"].setValue("");
	}

	//для сетки
  	countColumns: number = 4;
    participants: String[] = [
        "Петя", "Вася", "Дима", "Аня", "Таня", "Ваня", "Гриша", "Коля"
    ];
	treeList: number[] = this.createTreeList(8);

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

	createRange(size: number): number[] {
		let range: number[] = [];
		for (let i = 0; i < size; i++) {
			range.push(i);
		}
		return range;
	}
}
