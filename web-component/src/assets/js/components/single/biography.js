export default class LigSingleBiography extends HTMLElement {
  static get template() {
    return `
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .wrapper {
        display: flex;
        align-items: center;
        padding: 20px;
        border: 1px solid #e1e1e1;
        box-shadow: 0 3px 0 rgba(8,1,2,0.03);
      }
      .head {
        padding-right: 20px;
      }
      .body {
        font-size: 16px;
        line-height: 2;
      }
      ::slotted([slot="name"]) {
        font-weight: bold;
      }
    </style>
    <div class="wrapper">
      <div class="head">
        <slot name="img"></slot>
      </div>
      <div class="body">
        <slot name="name"></slot>
        <slot name="text"></slot>
      </div>
    </div>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = LigSingleBiography.template;
  }
}
