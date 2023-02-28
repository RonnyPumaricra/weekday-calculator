import { LitElement, html, css } from "lit";
import { Calendar } from "../CalendarMethods";

class CalendarWrapper extends LitElement {
  static styles = css`
    :host {
      // align-self: l;

      display: flex;
      flex-wrap: wrap;
      width: 100%;
      min-width: min-content;
      // height: 400px;
      background: var(--active-bg);
    }

    @media (max-width:800px) {
      .info {
        font-size: .8rem;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--dark-secondary);
      flex: 1;
      padding: 1rem;
    }
    .info div {
      line-height: calc(1em + 0.5rem);
    }
    .info :not(.day) {
      font-weight: 300;
    }
    .info .date {
      font-size: 4em;
    }
    .info .month {
      font-size: 3em;
    }
    .info .year {
      font-size: 2.5em;
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
    const monthName = Calendar.monthsList[month - 1].toUpperCase();
    const weekdayName = Calendar.weekdaysList[Calendar.getWeekday({ date, month, year })]
      .toUpperCase();
    return html`
      <div class="info">
        <div class="date">${date}</div>
        <div class="month">${monthName}</div>
        <div class="year">${year}</div>
        <div class="day">${weekdayName}</div>
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
