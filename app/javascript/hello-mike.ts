
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('hello-mike')
export class HelloMike extends LitElement {
  render() {
    return html`
      <div>
        This is the Mike element.
      </div>
    `;
  }
}

