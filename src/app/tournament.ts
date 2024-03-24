export class Tournament{
	name: string;
	description: string;
	dateTime: string;
	prizeFund: number;
	countPlayers: number;
	maxPlayers:number;

	constructor(nameTournament: string, descTournament: string, poolTournament: number, countPlayers: number, maxPlayersTournament: number) {
		this.name = nameTournament;
		this.description = descTournament;
		this.dateTime = "";
		this.prizeFund = poolTournament;
		this.countPlayers = countPlayers;
		this.maxPlayers = maxPlayersTournament;
	}
}