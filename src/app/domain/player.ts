export class Player {

    constructor(private name: string, private score = 0, private tiles = 0) {
    }

    public getName(): string {
        return this.name;
    }

    public setTiles(tiles: number) {
        this.tiles = tiles;
    }

    public placeTile() {
        this.tiles--;
    }

    public pickTiles(tiles: number) {
        this.tiles += tiles;
    }

    public getTiles(): number {
        return this.tiles;
    }

    public getScore(): number {
        return this.score;
    }

    public addScore(delta: number) {
        this.score += delta;
    }
}
