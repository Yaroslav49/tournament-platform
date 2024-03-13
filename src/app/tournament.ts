export class Tournament{
	name: string;
	description: string;
	dateTime: string;

	constructor(nameTournament: string, descTournament: string) {
		this.name = nameTournament;
		this.description = descTournament;
		this.dateTime = "";
	}
}