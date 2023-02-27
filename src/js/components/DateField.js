import { LitElement, html, css } from "lit";

class DateField extends LitElement {
  static styles = css`
    :host([error]) {
      color: var(--error);
    }

    :host([value]) {
      color: var(--secondary);
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
    :host(.year) .input {
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

  };

  render() {
    return html`
      <div class="input-wrapper">
        <div class="input" contenteditable="true"></div>
        <div class="input-bottom"></div>
      </div>
      <slot name="type"></slot>
      `;
  }
  // <input type="text">
}

customElements.define("date-field", DateField);
