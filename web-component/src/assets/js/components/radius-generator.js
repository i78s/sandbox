import {html, render} from 'lit-html';
export default class RadiusGenerator extends HTMLElement {
  static get observedAttributes() {
    return ['radius'];
  }

  get radius() {
    return this.getAttribute('radius');
  }

  set radius(val) {
    this.setAttribute('radius', val);
  }

  get template() {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        :host {
          display: block;
        }
        .wrapper {
          padding: 20px;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .target {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 200px;
          background-color: #eee;
        }
        .controls {
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }
        .controls span {
          margin-right: 10px;
        }
      </style>
      <div class="wrapper">
        <div class="container">
          <div class="target" style="border-radius: ${this.radius}px;">
            border-radius:  ${this.radius}px;
          </div>
        </div>
        <div class="controls">
          <span>radius: </span>
          <input type="range" min="0" max="100" value="${this.radius}">    
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.updateRadius = this.updateRadius.bind(this);
    this.render();
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('input', this.updateRadius);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('input', this.updateRadius);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  updateRadius(e) {
    this.radius = e.target.value;
  }

  render() {
    render(this.template, this.shadowRoot);
  }
}