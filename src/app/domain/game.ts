import {TilesBag} from './tiles-bag';
import {PlayersBag} from './players-bag';
import {Bonus} from './bonus';

export class Game {
  private SCORE_PER_PICKED_TILE = -5;

  constructor(
    public uuid: string,
    public playersBag: PlayersBag,
    public tilesBag: TilesBag,
    private dateStart: Date = null
  ) {
  }

  public getDateStart(): Date {
    return this.dateStart;
  }

  public start(): void {
    if (this.isStarted() || this.playersBag.count() < 2) {
      return;
    }

    const tileCount = this.playersBag.count() > 2 ? 7 : 9;

    this.playersBag.dealTiles(tileCount);
    this.playersBag.next();

    this.dateStart = new Date();
  }

  public canStart(): boolean {
    return this.playersBag.players().length >= 2 && !this.isStarted();
  }

  public isStarted(): boolean {
    return this.dateStart !== null;
  }

  public endTurn(tileScore: number, pickedTiles: number, isTilePlaced: boolean, bonus: Bonus) {
    this.setTileScore(tileScore);
    this.pickTilesFromBag(pickedTiles, isTilePlaced);

    if (bonus) {
      this.playersBag.current().addScore(bonus);
    }
    this.playersBag.next();
  }

  private setTileScore(tileScore: number) {
    if (tileScore > 15) {
      return;
    }
    this.playersBag.current().addScore(tileScore);
  }

  private pickTilesFromBag(pickedTiles: number, isTilePlaced: boolean) {
    this.tilesBag.pickTile(pickedTiles);

    this.playersBag.current().pickTiles(pickedTiles);
    if (isTilePlaced) {
      this.playersBag.current().placeTile();
    }

    const score = (pickedTiles === 3 && isTilePlaced === false) ? -25 : this.SCORE_PER_PICKED_TILE * pickedTiles;
    this.playersBag.current().addScore(score);
  }

  public isEnded(): boolean {
    return this.playersBag.players().some(player => (player.getTiles() === 0));
  }
}
