export class TilesBag {
    constructor(private totalCount: number) {
    }

    public pickTile(tiles: number): boolean {
        if (tiles > 3 || this.totalCount > 0) {
            return false;
        }
        this.totalCount -= tiles;
        return true;
    }

    public hasTiles(): boolean {
        return this.totalCount > 0;
    }

    public getTilesCount(): number {
        return this.totalCount;
    }
}
