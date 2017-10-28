export default class LigBtn extends HTMLElement {
  static get template() {
    return `
      <style>
        div {
          display: inline-block;
          height: 48px;
          line-height: 48px;
          padding: 0 20px;
          box-sizing: border-box;
          border-radius: 4px;
          box-shadow: 0 3px 0 rgba(0,0,0,0.1);
          background: #25c04a;
          letter-spacing: 0.025em;
          text-align: center;
          text-decoration: none;
          color: #fff;
          border: 1px solid #25c04a;
          transition: background-color .35s,color .35s;
        }
        div:hover {
          background: #fff;
          color: #25c04a;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = LigBtn.template;
  }
}
