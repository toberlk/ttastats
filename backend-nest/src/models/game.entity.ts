import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('games')
export class Game {
    
    @ObjectIdColumn() id: ObjectID;

    @Column() created: Date;
    @Column() author: string;
    @Column() origin: string;
    @Column() type: '2p' | '3p' | '4p';
    @Column() finishedOn: Date;
    @Column() playerNames: string[];
    @Column() winner: string;

    @Column((type) => PlayerResult) players: PlayerResult[];

    constructor(game?: Partial<Game>) {
        Object.assign(this, game);
    }
}

export class PlayerResult {
    @Column() player: string;
    @Column() leaders: string[];
    @Column() wonders: string[];
    @Column() seat: number;
    @Column() finalScore: number;
    @Column() finalPosition: 1 | 2 | 3 | 4;
    @Column() normalizedScore: number;
    @Column() winner: boolean;
    
}