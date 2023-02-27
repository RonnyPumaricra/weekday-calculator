import { LitElement, html, css } from "lit";
import { Calendar } from "../CalendarMethods";
import { module, range } from "../helpers";

class CalendarComponent extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(7, 2.6rem);
      gap: 1rem;
    }
    div {
      // width: 3rem;
      // height: 3rem;
      aspect-ratio: 1;
      font-size: 1.2rem;
      background: var(--secondary);
      display: grid;
      place-items: center;
    }
  `;

  /* Atributos a recibir */
  // date: Fecha consultada
  // dayCode: Código de la fecha consultada
  static properties = {
    date: {
      attribute: true,
      type: Number
    },
    month: {
      attribute: true,
      type: Number
    },
    year: {
      attribute: true,
      type: Number
    },
    dayCode: {
      attribute: true
    },
    firstDayCode: {
      state: true,
      type: Number
    }
  };

  update() {
    const { date, month, year } = this;
    if ([date, month, year].every(data => data !== undefined)) {
      console.table({ date, month, year });
      const weekday = Calendar.getWeekday({ date, month, year });
      // this.firstDayCode = module(weekday - date, month);
      this.firstDayCode = module(weekday - date + 1, month);
    }
    super.update();
  }

  renderPrevMonth() {
    console.log(this.month);
    return range(this.firstDayCode)
      .map((i) => {
        return Calendar.monthsDays[module(this.month - 2, 12)] - i;
      })
      .map(date => html`
        <calendar-date
          .date=${date}
        ></calendar-date>
      `)
      .reverse();
  }

  renderCurrentMonth() {
    return range(Calendar.monthsDays[this.month - 1])
      .map(date => html`
        <calendar-date
          ?currentMonth=${true}
          .date=${date + 1}
          ?selectedDate=${this.date === date + 1}
        ></calendar-date>
      `);
  }

  /* Halla el N° de días necesarios para completar el calendario */
  renderNextMonth() {
    console.log(-(Calendar.monthsDays[this.month - 1] + this.firstDayCode));
    return range(module(-(Calendar.monthsDays[this.month - 1] + this.firstDayCode), 7))
      .map(date => html`
        <calendar-date
          .date=${date + 1}
        ></calendar-date>
      `);
  }

  render() {
    console.log("Rendering...");
    const prevMonth = this.renderPrevMonth();
    const currentMonth = this.renderCurrentMonth();
    const nextMonth = this.renderNextMonth();

    return html`
      ${prevMonth}
      ${currentMonth}
      ${nextMonth}
    `;
  }
}

customElements.define("calendar-component", CalendarComponent);
