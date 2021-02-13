import { Component, ComponentInterface, h, Prop, Element } from '@stencil/core';
const storageKeyName = 'a-really-cool-key';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false
})
export class AppHome implements ComponentInterface {

  @Element() root: HTMLElement;
  @Prop() value: number = 0;

  componentWillLoad() {
    if (window.localStorage.getItem(storageKeyName)) {
      this.value = Number(window.localStorage.getItem(storageKeyName));
    } else {
      window.localStorage.setItem(storageKeyName, '0');
    }
  }

  componentDidLoad() {
    const btn = this.root.querySelector('.btn.plus-one');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.value += 1;

      window.localStorage.setItem(storageKeyName, `${this.value}`);
    })
  }

  render() {
    return (
      <div class='app-home'>
        <p id="value">{this.value}</p>
        <a href="#" class="btn plus-one">1-up</a>
      </div>
    );
  }
}
