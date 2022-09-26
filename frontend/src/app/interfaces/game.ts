export interface Game {
    created: Date;
    author: string;
    origin: string;
    type: '2p' | '3p' | '4p';
    finishedOn: Date;
    players: string[];
    winner: string;
    presults: PlayerResult[];

}

export interface PlayerResult {
    player: string;
    leaders: string[];
    wonders: string[];
    seat: number;
    finalScore: number;
    finalPosition: 1 | 2 | 3 | 4;
    normalizedScore: number;
    
}

export type GameType = '2p' | '3p' | '4p';