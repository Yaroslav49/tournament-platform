import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

@Component({
	selector: "app-root",
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
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
export class AppComponent {
	title = 'tournamentPlatform';
	countPlayers: number = 0;
	players: string[] = [];

	inputForm = new FormGroup(
		{
			nameTournament: new FormControl('', [Validators.required]),
			description: new FormControl('', {nonNullable: true}),
			datetime: new FormControl([new TuiDay(2024, 2, 18), new TuiTime(12, 30)]),
			maxCountParticipants: new FormControl('2', {nonNullable: true}),
			namePlayer: new FormControl('', {nonNullable: true})
		}, control =>
		Object.values((control as FormGroup).controls).every(({valid}) => valid)
			? null
			: {other: 'Необходимо заполнить поле'}
	);

	createTournament(): void {
		
	}

	addPlayer(): void {
		let inputNamePlayer = this.inputForm.controls['namePlayer']
		this.players.push(inputNamePlayer.value);
		this.countPlayers += 1;
		inputNamePlayer.setValue("");
	}
}
