import { LitElement, html, css } from "lit";
import { Calendar } from "../CalendarMethods";

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

      :host([submitted]) .date-wrapper {
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
    date: {
      state: true,
      // attribute: true,
      // reflect: true,
      type: Number
    },
    month: {
      state: true,
      // attribute: true,
      // reflect: true,
      type: Number
    },
    year: {
      state: true,
      // attribute: true,
      // reflect: true,
      type: Number
    },
    isButtonDisabled: {
      state: true,
      type: Boolean
    },
    submitted: {
      attribute: true,
      reflect: true,
      type: Boolean
    }
    // fieldsList: {
    //   state: true
    // }
  };

  constructor() {
    super();
    this.isButtonDisabled = true;
    this.submitted = false;
  }

  /**
   * @param {Set} changedProps
   */
  update(changedProps) {
    // console.log(changedProps);
    if (
      changedProps.has("year") ||
      changedProps.has("month") ||
      changedProps.has("date")
    ) {
      this.submitted = false;
      this.setIsDisabled();
    }
    super.update();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { date, month, year } = this;
    if (year === 0) {
      this.getField("year").setAttribute("error", "");
      this.isButtonDisabled = true;
      return;
    }
    if (month > 12 || month === 0) {
      this.getField("month").setAttribute("error", "");
      this.isButtonDisabled = true;
      return;
    }
    if (date > Calendar.getMonthDay(month - 1, year) || date === 0) {
      this.getField("date").setAttribute("error", "");
      this.isButtonDisabled = true;
      return;
    }
    /* Valid submit */
    this.submitted = true;
    this.isButtonDisabled = true;
    this.dispatchEvent(new CustomEvent("dateSubmit", {
      bubbles: true,
      detail: {
        date,
        month,
        year
      }
    }));
  }

  getField(field) {
    return this.renderRoot.querySelector(`date-field[field=${field}]`);
  }

  setField = field => ev => {
    this[field] = ev.detail;
    this.getField(field).removeAttribute("error");
    this.getField("date").removeAttribute("error");
  };

  setIsDisabled() {
    // const dateState = this.date;
    const { date, month, year } = this;
    console.table({ date, month, year });
    if (this.renderRoot.querySelectorAll("[error]").length !== 0) {
      this.isButtonDisabled = true;
      return;
    }
    this.isButtonDisabled = [date, month, year]
      .some(el => el === undefined || el === null);
  }

  render() {
    const spacer = html`<span class="spacer">/</span>`;
    // const { date, month, year } = this;
    return html`
      <form @submit=${this.handleSubmit}>
        <div class="date-wrapper">
          <date-field
            field="date"
            @changeValue=${this.setField("date")}
            >
            <p slot="type">Día</p>
          </date-field>
          ${spacer}
          <date-field
            field="month"
            @changeValue=${this.setField("month")}
          >
            <p slot="type">Mes</p>
          </date-field>
          ${spacer}
          <date-field
            field="year"
            @changeValue=${this.setField("year")}
            >
            <p slot="type">Año</p>
          </date-field>
        </div>
        <button
          ?disabled=${this.isButtonDisabled}
        >
          <span>Calcular</span>
          <div class="bg"></div>
        </button>
      </form>
    `;
  }
}

customElements.define("weekday-form", WeekdayForm);
