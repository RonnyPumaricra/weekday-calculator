import { LitElement, html, css } from "lit";

class DateField extends LitElement {
  static styles = css`
    :host([intValue]) {
      color: var(--secondary);
    }
    :host([error]) {
      color: var(--error);
    }

    :host-context([submitted]) {
      color: inherit;
    }

    .input-wrapper {
      position: relative;
      // background: var(--secondary);
    }

    .input {
      font-size: 2rem;
      text-align: center;
      
      // display: block;

      // outline: 1px solid var(--primary);
      // width: 3ch;
      min-width: 2.5ch;
      width: fit-content;
      height: 1em;
      padding: 1rem;
      // padding-bottom: calc(1rem + 6px);
      // overflow: hidden;
      // text-overflow: ellipsis;
    }
    :host([field="year"]) .input {
      min-width: 4.5ch;
    }

    .input-bottom {
      position: absolute;
      // top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      height: 6px;
      background: currentColor;

      border-radius: 10px 10px 0 0 / 100% 100% 0 0;
    }

    
    ::slotted(p) {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
    }
  `;

  static properties = {
    value: {
      state: true
    },
    intValue: {
      attribute: true,
      reflect: true,
      type: Number
    }
    // fieldState: {
    //   attribute: true
    // }
  };

  handleInput(ev) {
    this.value = ev.target.textContent.trim();
    // console.log("\"" + this.value + "\"");
    const parsedValue = parseInt(this.value);
    this.intValue = this.value !== ""
      ? parsedValue
      : undefined;
    // this.intValue = parsedValue;
    // console.log(this.intValue);
    this.dispatchEvent(new CustomEvent("changeValue", {
      bubbles: true,
      detail: this.intValue
    }));
  }

  /* Avoid whitespaces */
  handleKey(ev) {
    // if ([32, 13].some(code => code === ev.charCode)) ev.preventDefault();
    const { charCode } = ev;
    if (!(charCode >= 48 && charCode <= 57)) ev.preventDefault();
    // console.log(ev.charCode);
  }

  render() {
    return html`
      <div class="input-wrapper">
        <div
          class="input"
          contenteditable="true"
          @input=${this.handleInput}
          @keypress=${this.handleKey}
          .textContent=${this.value}
        ></div>
        <div class="input-bottom"></div>
      </div>
      <slot name="type"></slot>
      `;
  }
  // <input type="text">
}

customElements.define("date-field", DateField);
