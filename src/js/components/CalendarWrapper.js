import { LitElement, html, css } from "lit";

class CalendarWrapper extends LitElement {
  static styles = css`
    :host {
      align-self: center;

      display: flex;
      width: 100%;
      height: 400px;
      background: var(--active-bg);
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--dark-secondary);
      width: 300px;
    }
    .info div {
      line-height: calc(1em + 0.5rem);
    }
    .info :not(.day) {
      font-weight: 300;
    }
    .info .date {
      font-size: 4rem;
    }
    .info .month {
      font-size: 3rem;
    }
    .info .year {
      font-size: 2.5rem;
    }
    .info .day {
      color: var(--primary);
      font-size: 2rem;
      font-weight: 700;
      margin-top: 3rem;
    }

    .calendar-wrapper {
      flex: 1;
      display: grid;
      place-items: center;
    }
  `;

  static properties = {
    inputData: {
      attribute: true,
      type: Object
    }
  };

  render() {
    const { date, month, year } = this.inputData;
    return html`
      <div class="info">
        <div class="date">10</div>
        <div class="month">JULIO</div>
        <div class="year">2005</div>
        <div class="day">DOMINGO</div>
      </div>
      <div class="calendar-wrapper">
        <calendar-component
          .date=${date}
          .month=${month}
          .year=${year}
        ></calendar-component>
      </div>
    `;
  }
}

customElements.define("calendar-wrapper", CalendarWrapper);
