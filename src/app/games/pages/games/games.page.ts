import {Component} from '@angular/core';
import {GameService} from '../../../services';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss'],
})
export class GamesPage {

  constructor(
    public gameService: GameService,
    public alertController: AlertController
  ) {
  }

  async deleteGame(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete game',
      message: 'Are you sure to delete this game?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
      }, {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          this.gameService.delete(index);
        }
      }]
    });

    await alert.present();
  }
}
