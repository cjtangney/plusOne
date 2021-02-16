import { Component, h, ComponentInterface, State, Element, Prop } from '@stencil/core';
import { guid } from 'utils';
import axios from 'axios';

const api = 'https://plus-one-server.vercel.app';

@Component({
  tag: 'hero-row',
  styleUrl: 'hero-row.scss',
  shadow: false
})
export class HeroRow implements ComponentInterface {
  
  @Element() root: HTMLElement;

  @Prop() heroName: string;
  @Prop({
    mutable: true,
    reflect: true
  }) gamesPlayed: number = 0;
  @Prop({
    mutable: true,
    reflect: true
  }) gamesWon: number = 0;
  @Prop({
    mutable: true,
    reflect: true
  }) gamesBanned: number = 0;

  @State() guid: string = guid();
  @State() winRate: number;
  @State() banRate: number;

  constructor() {
    this.calcWinRate();
  }
  
  plusOneGame = (event) => {
    event.preventDefault();
    this.gamesPlayed += 1;
    this.calcWinRate();
    this.postback();
  }

  plusOneWin = (event) => {
    event.preventDefault();
    if (this.gamesWon < this.gamesPlayed) {
      this.gamesWon += 1;
      this.calcWinRate();
      this.postback();
    }
  }

  plusOneBan = (event) => {
    event.preventDefault();
    this.gamesBanned += 1;
    this.calcBanRate();
    this.postback();
  }

  postback = () => {
    const hero = JSON.parse(window.localStorage.getItem(`hero:${this.heroName}`));

    hero.gamesPlayed = this.gamesPlayed;
    hero.gamesWon = this.gamesWon;
    hero.timesBanned = this.gamesBanned;
    window.localStorage.setItem(`hero:${this.heroName}`, JSON.stringify(hero));

    axios.post(`${api}/update:${JSON.stringify(hero)}`).then((res) => {
      console.log(res);
    });
  }

  calcWinRate = () => {
    this.winRate = (2 * this.gamesWon) / (2 * this.gamesPlayed) * 100;
  }

  calcBanRate = () => {
    this.banRate = (2 * this.gamesBanned) / (2 * this.gamesPlayed) * 100;
  }

  render() {
    return (
      <div class="hero">
        <div class="name">
          <p>{this.heroName}</p>
        </div>
        <div class="games-played">
          <span>{this.gamesPlayed}</span>
          <a href="#" class="btn btn-primary" onClick={this.plusOneGame}>+1</a>
        </div>
        <div class="games-won">
          <span>{this.gamesWon}</span>
          {
            this.gamesWon < this.gamesPlayed ? 
            <a href="#" class='btn btn-success' onClick={this.plusOneWin}>+1</a> : 
            <a href="#" class='btn btn-secondary disabled'>+1</a>
          }
        </div>
        <div class="games-banned">
          <span>{this.gamesBanned}</span>
          <a href="#" class="btn btn-danger" onClick={this.plusOneBan}>+1</a>
        </div>
        <div class="win-rate">
          <p>{isNaN(this.winRate) || this.winRate === Infinity ? 0 : this.winRate.toFixed(2)}%</p>
        </div>
      </div>
    );
  }
}