import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-statistic-box',
  templateUrl: './statistic-box.component.html',
  styleUrls: ['./statistic-box.component.scss'],
})
export class StatisticBoxComponent implements OnInit {
  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {}

  getPlayerNumber(): number {
    return this.playerService.getPlayerNumber();
  }

  sumWage(): number {
    return this.playerService.calculataPlayerSumWage();
  }
}

