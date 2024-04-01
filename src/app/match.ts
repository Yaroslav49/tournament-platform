export class Match {
    id: number;
    tournamentId: number;
    playerIds: number[];
    round: number;
    resultMatch: any;
    timeMatch: number;
    statusMatch: string;

    constructor(id: number,
        tournamentId: number,
        playerIds: number[],
        round: number,
        resultMatch: any,
        timeMatch: number,
        statusMatch: string
    ) {
        this.id = id;
        this.tournamentId = tournamentId;
        this.playerIds = playerIds;
        this.round = round;
        this.resultMatch = resultMatch;
        this.timeMatch = timeMatch;
        this.statusMatch = statusMatch;

    }
}