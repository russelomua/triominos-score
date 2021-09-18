import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Game} from '../domain';
import {Observable} from 'rxjs';
import {GameService} from '../services';

@Injectable({providedIn: 'root'})
export class GameResolver implements Resolve<Game> {

  constructor(private gameService: GameService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> | Promise<Game> | Game {
    console.log(route.params.uuid);
    if ('new' === route.params.uuid) {
      return this.gameService.create();
    }

    const game = this.gameService.findById(route.params.uuid);

    if (!game) {
      throw new Error();
    }

    return game;
  }
}
