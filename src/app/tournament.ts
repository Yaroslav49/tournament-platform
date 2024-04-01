import {Participant} from './participant';
import {Match} from './match';

export class Tournament{
	id: number;
	name: string;
	description: string;
	dateTime: string;
	prizeFund: number;
	countPlayers: number;
	maxPlayers:number;
	password: string;
	participants: Participant[] | null;
	matches: Match[] | null;

	constructor(id:number, nameTournament: string, descTournament: string, 
		poolTournament: number, countPlayers: number, maxPlayersTournament: number, 
		password: string, participants: Participant[] | null, matches: Match[] | null) {
		this.id = id;
		this.name = nameTournament;
		this.description = descTournament;
		this.dateTime = "02.04.2024 19:00";
		this.prizeFund = poolTournament;
		this.countPlayers = countPlayers;
		this.maxPlayers = maxPlayersTournament;
		this.password = password;
		this.participants = participants;
		this.matches = matches;
	}
}