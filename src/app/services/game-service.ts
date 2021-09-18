import {Injectable} from '@angular/core';
import {Game, GameState, PlayersBag, TilesBag} from '../domain';
import {GameSerializer} from './game-serializer';
import {PersistenceService} from './persistence.service';
import {uuid4} from '@capacitor/core/dist/esm/util';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private TILES_COUNT = 56;

  public states: GameState[] = [];

  constructor(
    private serializer: GameSerializer,
    private persistenceService: PersistenceService
  ) {
    this.states = this.persistenceService.restore();
  }

  create(): Game {
    return new Game(uuid4(), new PlayersBag(), new TilesBag(this.TILES_COUNT));
  }

  save(game: Game) {
    const index = this.states.findIndex(s => s.uuid === game.uuid);
    const state = this.serializer.deserialize(game);

    if (-1 === index) {
      this.states.push(state);
    } else {
      this.states[index] = state;
    }

    this.persistenceService.persist(this.states);
  }

  delete(index: number): void {
    console.log(index, this.states);
    console.log(index, this.states.splice(index, 1), this.states);
  }

  findById(uuid: string): Game | null {
    const state = this.states.find(s => s.uuid === uuid);
    return state ? this.serializer.serialize(state) : null;
  }
}
