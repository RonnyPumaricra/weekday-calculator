import { LitElement, html, css } from "lit";

class AppWrapper extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      margin: auto;
      padding: 0 64px;
      width: 1200px;

      text-align: center;

      background: hsl(200deg 100% 50% / 40%) content-box;
    }

    .primary {
      color: var(--primary);
    }
  `;

  static properties = {

  };

  render() {
    return html`
      <h1><span class="primary">Weekday</span>Calculator</h1>
      <p>Ingresa una fecha para calcular en qué día de la semana cae</p>
      <weekday-form>Hello</weekday-form>
    `;
  }
}

customElements.define("app-wrapper", AppWrapper);
