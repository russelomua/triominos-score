import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {GamesPage} from './pages/games/games.page';
import {HomePageRoutingModule} from './games-routing.module';
import {GamePage} from './pages/game/game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [GamesPage, GamePage]
})
export class GamesPageModule {
}
