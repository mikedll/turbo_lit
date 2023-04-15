
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement("hello-mike")
export class HelloMike extends LitElement {
  render() {
    return html`
      This is the element.
    `;
  }
}

