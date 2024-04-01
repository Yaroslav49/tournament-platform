import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";
import {Tournament} from './tournament';

@Component({
	selector: "creating-tournament.component",
	templateUrl: './creating-tournament.component.html',
	styleUrls: ['./creating-tournament.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Необходимо заполнить данное поле'
            },
        },
    ],
})
export class CreatingTournamentComponent {
	title = 'tournamentPlatform';
	countPlayers: number = 0;
	players: string[] = [];

	constructor(private router: Router, private httpService: HttpService){}

	inputForm = new FormGroup(
		{
			nameTournament: new FormControl('', [Validators.required]),
			description: new FormControl('', {nonNullable: true}),
			datetime: new FormControl([new TuiDay(2024, 2, 18), new TuiTime(12, 30)]),
			maxCountParticipants: new FormControl(2, {nonNullable: true}),
			prizeFund: new FormControl(0, {nonNullable: true}),
			password: new FormControl('', [Validators.required]),
		}, control =>
		Object.values((control as FormGroup).controls).every(({valid}) => valid)
			? null
			: {other: 'Необходимо заполнить поле'}
	);

	createTournament(): void {
		this.httpService.postTournament({
			id: 0,
			name: String(this.inputForm.controls['nameTournament'].value),
			description: this.inputForm.controls['description'].value,
			dateTime: "12.03.2024 10:00",
			prizeFund: Number(this.inputForm.controls['prizeFund'].value),
			countPlayers: 0,
			maxPlayers: Number(this.inputForm.controls['maxCountParticipants'].value),
			password: String(this.inputForm.controls['password'].value),
			participants: null,
			matches: null,
		}).subscribe({
			next:(data: any) => {
				console.log(data);
				console.log(data.id);
				this.httpService.idTournament = data.id;
				console.log(this.httpService.idTournament);
				this.router.navigate(["/open"]);
			},
			error: error => console.log(error)
		});
	}

	/*addPlayer(): void {
		let inputNamePlayer = this.inputForm.controls['namePlayer']
		this.players.push(inputNamePlayer.value);
		this.countPlayers += 1;
		inputNamePlayer.setValue("");
	}*/
}
