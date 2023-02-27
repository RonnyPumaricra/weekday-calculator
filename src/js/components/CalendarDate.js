import { LitElement, html, css } from "lit";

class CalendarDate extends LitElement {
  static styles = css`
    :host {
      aspect-ratio: 1;
      font-size: 1.2rem;
      display: grid;
      place-items: center;
      color: var(--disabled-bg);
      border-radius: 50%;

      position: relative;
    }
    div {
      isolation: isolate;
    }
    span.bg {
      position: absolute;
      inset: 0;
      border-radius: 50%;
    }

    :host([selectedDate]) span.bg {
      background: var(--primary);
      filter: blur(2px);
    }

    :host([currentMonth]) {
      color: inherit;
    }
    :host([selectedDate]) {
      // background: var(--translucid-primary);
      // backdrop-filter: blur(5px);
    }
    /* Domingos */
    :host([currentMonth]:nth-child(7n + 1):not([selectedDate])) span.bg {
      background: var(--calendar-holiday);
      inset: 2px;
    }
  `;

  static properties = {
    date: {
      attribute: true,
      type: Number
    }
  };

  render() {
    return html`
      <span class="bg"></span>
      <div>
        ${this.date}
      </div>
    `;
  }
}

customElements.define("calendar-date", CalendarDate);
