import { Component, h, ComponentInterface, State } from '@stencil/core';
import { guid } from 'utils';


@Component({
  tag: 'hero-grid',
  styleUrl: 'hero-grid.scss',
  shadow: false
})
export class HeroGrid implements ComponentInterface {

  @State() guid: string = guid();
  @State() heroes: Array<any>;
  @State() loaded: boolean = false;

  constructor() {
    let heroKeys;
    const pollInterval = setInterval(() => {
      if (window.localStorage.getItem('heroes-key')) {
        heroKeys = window.localStorage.getItem('heroes-key');
        clearInterval(pollInterval);
        this.loaded = true;
      };
    }, 250);

    const listInterval = setInterval(() => {
      if (this.loaded) {
        const heroes = [];
        JSON.parse(heroKeys).forEach((hero) => {
          heroes.push(JSON.parse(window.localStorage.getItem(`hero:${hero}`)));
        });
        this.heroes = heroes;
        clearInterval(listInterval);
      }
    }, 250);
  }

  render() {
    return (
      <div class="hero-grid">
        <div class="hero series-label">
          <div class="name">
            <p>Hero Name</p>
          </div>
          <div class="games-played">
            <span># Games Played</span>
          </div>
          <div class="games-won">
            <span># Games Won</span>
          </div>
          <div class="games-banned">
            <span># Games Banned</span>
          </div>
          <div class="win-rate">
            <p>% Win / Loss</p>
          </div>
        </div>
        { 
          this.loaded ? 
          this.heroes.map((hero) => (
            <hero-row
              hero-name={hero.name}
              games-played={hero.gamesPlayed}
              games-won={hero.gamesWon}
              games-banned={hero.gamesBanned}
            />
          )) : 
          <div class="loader">LOADING</div>
        }
      </div>
    );
  }
}