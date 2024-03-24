import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
	selector: 'view-tournament.component',
	templateUrl: './view-tournament.component.html',
	styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent {
	nameTournament: String = "Чемпионат по доте";
	description: String = "Сразитесь в легендарном поединке с лучшими игроками региона";
	datetime: String = "26.03.2024 19:00";
	inputForm = new FormGroup(
		{
			newParticipant: new FormControl('', {nonNullable: true})
		}
	)

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
