import { LitElement, html, css } from "lit";
import { Calendar } from "../CalendarMethods";
import { module, range } from "../helpers";

class CalendarComponent extends LitElement {
  static styles = css`
    :host {
      --date-size: 2.6rem;
      display: grid;
      grid-template-columns: repeat(7, var(--date-size));
      gap: 1rem;
      padding: 1.5rem;
    }
    @media (max-width:800px) {
      :host {
        gap: .6rem;
        --date-size: 2.3rem;
      }
    }
    @media (max-width:400px) {
      :host {
        --date-size: 2rem;
        padding-left: .5rem;
        padding-right: .5rem;
      }
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
      // console.table({ date, month, year });
      const weekday = Calendar.getWeekday({ date, month, year });
      // this.firstDayCode = module(weekday - date, month);
      this.firstDayCode = module(weekday - date + 1, 7);
      console.log("FirstDayCode: ", this.firstDayCode);
    }
    super.update();
  }

  getDays(monthIndex) {
    return Calendar.getMonthDay(monthIndex, this.year);
  }

  renderPrevMonth() {
    // console.log(this.month);
    return range(this.firstDayCode)
      .map((i) => {
        return this.getDays(module(this.month - 2, 12)) - i;
      })
      .map(date => html`
        <calendar-date
          .date=${date}
        ></calendar-date>
      `)
      .reverse();
  }

  renderCurrentMonth() {
    return range(this.getDays(this.month - 1))
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
    // console.log(-(this.getDays(this.month - 1] + this.firstDayCode));
    return range(module(-(this.getDays(this.month - 1) + this.firstDayCode), 7))
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
