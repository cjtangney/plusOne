import { Component, h, ComponentInterface } from '@stencil/core';


@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.css',
  shadow: false
})
export class PageNotFound implements ComponentInterface {
  
  render() {
    return (
      <div class="container">
        <p>Wrong page, bonehead.</p>
      </div>
    );
  }
}