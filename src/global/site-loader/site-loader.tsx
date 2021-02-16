import { Component, h, Prop, Element, State, ComponentInterface } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

import axios from 'axios';

const Router = createRouter();
const api = 'https://plus-one-server.vercel.app';

@Component({
  tag: 'site-loader',
  styleUrl: 'site-loader.scss',
  shadow: false
})
export class SiteLoader implements ComponentInterface {

  @Element() root: HTMLElement;

  @Prop({
    mutable: true,
    reflect: true
  }) markup: any;

  @State() heroes: Array<any> = [];

  constructor() {
    this.loadHeroes();
  }

  // heroes loaded into local storage
  loadHeroes = async () => {
    axios.get(`${api}/heroes`,
      {
        timeout: 5000,
      })
      .then((res) => {
        const heroNames = [];
        res.data.forEach((hero) => {
          heroNames.push(hero.name);
          this.heroes.push(hero);
          window.localStorage.setItem(`hero:${hero.name.toUpperCase()}`, JSON.stringify(hero));
          window.localStorage.setItem(`heroes-key`, JSON.stringify(heroNames));
        });
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        console.log(err.stack);
      });
  }

  componentDidRender() {
    return this.fetchContents();
  }

  componentWillUpdate() {
    return this.fetchContents();
  }

  fetchContents() {
    const path = document.location.pathname;

    if (this.root.querySelector('.page-root')) {
      this.root.querySelector('.page-root').setAttribute('drawn', 'false');
    }

    axios.get(`/pages${path}/index.html`)
      .then((response) => {
        this.markup = response.data;
        if (this.root.querySelector('.page-root')) {
          this.root.querySelector('.page-root').setAttribute('drawn', 'true');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Router.Switch>
        <Route
          path={document.location.pathname}
          render={() => (
            <div class="page-root" innerHTML={this.markup} />
          )}
        />
      </Router.Switch>
    )
  }
}