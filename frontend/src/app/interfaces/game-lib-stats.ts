export interface GameLibStats {
    updated: Date;
    'tot': number;
    '2p': number;
    '3p': number;
    '4p': number;
}

export const emptyStats: GameLibStats = {
    updated: new Date(),
    'tot': 0,
    '2p': 0,
    '3p': 0,
    '4p': 0,
}