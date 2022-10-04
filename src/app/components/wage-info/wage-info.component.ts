import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss']
})
export class WageInfoComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  highestPaidPlayer(): string {
    return this.playerService.highestPaidPlayer();
  }

  highestPaidAmount(): number {
    return this.playerService.highestPaidAmount();
  }

}
