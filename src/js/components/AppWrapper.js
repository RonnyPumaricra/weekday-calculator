import { LitElement, html, css } from "lit";

const resultCopy = css`
  .result-copy {
    text-align: start;
    margin-right: auto;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .single-line {
    display: block;
  }
  .bold {
    font-weight: 700;
  }
  .weekday-name {
    font-size: 1.5em;
    color: var(--primary);
  }
`;
class AppWrapper extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0 64px;
        width: 100%;
        max-width: 1200px;

        text-align: center;

        // background: hsl(200deg 100% 50% / 40%) content-box;
      }

      .primary {
        color: var(--primary);
      }
    `,
    resultCopy
  ];

  static properties = {
    inputData: {
      state: true,
      type: Object
    }
  };

  constructor() {
    super();
    this.inputData = {
      date: 10,
      month: 7,
      year: 2005
    };
  }

  handleDateSubmit(ev) {
    this.inputData = { ...ev.detail };
  }

  render() {
    return html`
      <h1><span class="primary">Weekday</span>Calculator</h1>
      <p>Ingresa una fecha para calcular en qué día de la semana cae</p>
      <weekday-form @dateSubmit=${this.handleDateSubmit}></weekday-form>
      <calendar-wrapper .inputData=${this.inputData}></calendar-wrapper>
      `;
    // <div class="weekday-result">
    //   <p class="result-copy">
    //     <span class="single-line bold">El día <span class="date">10/07/2005</span></span>
    //     <span class="single-line">cae en...</span>
    //     <span class="single-line bold weekday-name">Domingo</span>
    //   </p>
    // </div>
  }
}

customElements.define("app-wrapper", AppWrapper);
