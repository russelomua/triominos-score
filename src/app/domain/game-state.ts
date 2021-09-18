export interface GameState {
    uuid: string;
    players: {
        name: string,
        score: number,
        tiles: number,
    }[];
    playerIndex: number;
    tiles: number;
    dateStart: Date;
}
