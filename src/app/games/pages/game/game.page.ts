import {Component} from '@angular/core';
import {GameService} from '../../../services';
import {Bonus, Game, Player} from '../../../domain';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})

export class GamePage {

  public bonusList = [
    {value: null, label: 'None'},
    {value: Bonus.BRIDGE, label: 'Bridge'},
    {value: Bonus.HEXAGON, label: 'Hexagon'},
    {value: Bonus.DOUBLE_HEXAGON, label: '2 Hexagon'},
    {value: Bonus.TRIPLE_HEXAGON, label: '3 Hexagon'},
  ];

  public tilesScore = 0;
  public tilesPicked = 0;
  public isTilesPlaced: boolean;
  public bonus: Bonus | null = null;

  public game: Game;

  constructor(
    public alertController: AlertController,
    public gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.data.pipe(take(1)).subscribe(state => {
      this.game = state.game;
    });
  }

  getBonusText(bonus: Bonus): string {
    const item = this.bonusList.find((value) => {
      return value.value === bonus;
    });

    return item?.label ?? '';
  }

  async addPlayer() {
    const alert = await this.alertController.create({
      header: 'Add player',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Player name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Add',
          handler: (data) => {
            const player = new Player(data.name);
            this.game.playersBag.addPlayer(player);
          }
        }
      ]
    });

    await alert.present();
  }

  nextPlayer() {
    this.game.endTurn(this.tilesScore, this.tilesPicked, !!this.isTilesPlaced, this.bonus);

    this.tilesScore = 0;
    this.tilesPicked = 0;
    this.isTilesPlaced = false;
    this.bonus = null;
  }

  getPlayers() {
    return this.game.playersBag.players();
  }

  save() {
    this.gameService.save(this.game);
  }
}
