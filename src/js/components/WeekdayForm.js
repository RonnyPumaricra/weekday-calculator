import { LitElement, html, css } from "lit";

const buttonStyles = css`
  button {
    // --bd-rds: 12px;
    --heavy-ease-in: cubic-bezier(.31,.05,.62,.45);
    --heavy-ease-out: cubic-bezier(.28,.54,.71,.85);

    user-select: none;

    padding:0;
    border:0;
    border-radius: 8px;
    color: inherit;
    font: inherit;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    background: var(--dark-primary);
    outline-offset: 4px;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button span {
    display: block;
    padding: .5rem 2rem;
    border-radius: inherit;
    background: hsl(119deg 85% 40%);

    transition: translate 200ms, background 200ms;
    transition-timing-function: var(--heavy-ease-out);
  }

  button:disabled span {
    background: var(--disabled-bg);
    color: var(--disabled-txt);
  }

  button:not(:disabled) span {
    translate: 0 -4px;
  }

  button:hover:not(:disabled) span {
    background: var(--primary);
    translate: 0 -6px;
    transition-duration: 90ms;
    transition-timing-function: var(--heavy-ease-in);
  }
  button:active:not(:disabled) span {
    background: var(--primary);
    translate: 0 -2px;
    transition-duration: 40ms;
    // transition-timing-function: var(--heavy-ease-in);
  }
`;

class WeekdayForm extends LitElement {
  static styles = [
    css`
      :host {
        font-family: "Ubuntu Mono", monospace;
        font-weight: 700;
      }

      .date-wrapper {
        display: flex;
        justify-content: center;
        align-items: baseline;
      }

      .date-wrapper[submitted] {
        color: var(--primary);
      }

      .spacer {
        font-size: 2rem;
        margin: 0 1rem;
        pointer-events: none;
        user-select: none;
      }
    `,
    buttonStyles
  ];

  static properties = {
    // fieldsList: {
    //   state: true
    // }
  };

  handleSubmit(ev) {
    ev.preventDefault();
    const { date, month, year } = this;
    this.dispatchEvent(new CustomEvent("dateSubmit", {
      bubbles: true,
      detail: {
        date,
        month,
        year
      }
    }));
  }

  /**
   * @param {"date" | "month" | "year"} field
   */
  getFieldValue(field) {
    return this.renderRoot.querySelector(`date-field[field=${field}]`).intValue;
  }

  get date() { return this.getFieldValue("date"); }
  get month() { return this.getFieldValue("month"); }
  get year() { return this.getFieldValue("year"); }

  render() {
    const spacer = html`<span class="spacer">/</span>`;

    return html`
      <form @submit=${this.handleSubmit}>
        <div class="date-wrapper">
          <date-field field="date">
            <p slot="type">Día</p>
          </date-field>
          ${spacer}
          <date-field field="month">
            <p slot="type">Mes</p>
          </date-field>
          ${spacer}
          <date-field field="year">
            <p slot="type">Año</p>
          </date-field>
        </div>
        <button>
          <span>Calcular</span>
          <div class="bg"></div>
        </button>
      </form>
    `;
  }
}

customElements.define("weekday-form", WeekdayForm);
