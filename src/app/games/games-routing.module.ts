import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesPage} from './pages/games/games.page';
import {GamePage} from './pages/game/game.page';
import {GameResolver} from '../resolvers/game.resolver';

const routes: Routes = [
  {path: '', component: GamesPage},
  {path: ':uuid', component: GamePage, resolve: {game: GameResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
