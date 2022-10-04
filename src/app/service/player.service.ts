import { Injectable } from '@angular/core';
import { Player } from 'src/model/player';
import { players } from '../mock/player-mock';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  players: Player[] = players;

  constructor() {}

  getPlayerNumber(): number {
    return this.players.length;
  }

  calculataPlayerSumWage(): number {
    let number = 0;
    this.players.forEach((element) => {
      number += element.wage;
    });
    return number;
  }

  highestPaidAmount(): number {
    return Math.max(...this.players.map((p) => p.wage));
  }

  highestPaidPlayer(): string {
    const maxObj = this.players.reduce((prev, current) => (prev.wage > current.wage) ? prev : current);
    return maxObj.name;
  }
}
