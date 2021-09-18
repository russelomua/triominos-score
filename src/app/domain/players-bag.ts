import {Player} from './player';

export class PlayersBag {
  private playersList: Player[] = [];
  private currentPlayer: Player;

  public addPlayer(player: Player) {
    if (this.playersList.length === 4) {
      return;
    }
    this.playersList.push(player);
  }

  public players(): Player[] {
    return this.playersList;
  }

  public current(): Player {
    return this.currentPlayer;
  }

  public currentIndex(): number {
    return this.playersList.indexOf(this.currentPlayer);
  }

  public setCurrent(index: number) {
    if (index > this.playersList.length - 1) {
      return;
    }

    this.currentPlayer = this.playersList[index];
  }

  public next(): void {
    const currentIndex = this.currentIndex();
    const isLast = (currentIndex === -1) || (currentIndex === this.playersList.length - 1);
    this.currentPlayer = isLast ? this.playersList[0] : this.playersList[currentIndex + 1];
  }

  public count(): number {
    return this.playersList.length;
  }

  public dealTiles(tileCount: number): void {
    for (const player of this.players()) {
      player.setTiles(tileCount);
    }
  }

  public delete(player: Player): void {
    const index = this.playersList.indexOf(player);

    if (-1 === index) {
      return;
    }

    this.playersList.splice(index, 1);
  }
}
