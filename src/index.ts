import {
  LitElement,
  html,
  property,
  customElement,
} from '@polymer/lit-element';

// @ts-ignore
@customElement('greeter-element')
export class GreeterElement extends LitElement {
  @property() firstName;

  @property() lastName;

  render() {
    return html`
      <h1>Hello ${this.firstName} ${this.lastName}</h1>
    `;
  }
}
