import {Game, GameState, Player, PlayersBag, TilesBag} from '../domain';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameSerializer {
  deserialize(game: Game): GameState {
    const players = game.playersBag.players().map(player => {
      return {name: player.getName(), score: player.getScore(), tiles: player.getTiles()};
    });

    return {
      uuid: game.uuid,
      players,
      tiles: game.tilesBag.getTilesCount(),
      dateStart: game.getDateStart(),
      playerIndex: game.playersBag.currentIndex()
    };
  }

  serialize(state: GameState): Game {
    const tiles = new TilesBag(state.tiles);
    const bag = new PlayersBag();

    for (const playerState of state.players) {
      const player = new Player(playerState.name, playerState.score, playerState.tiles);
      bag.addPlayer(player);
    }

    bag.setCurrent(state.playerIndex);

    return new Game(state.uuid, bag, tiles, state.dateStart);
  }
}
