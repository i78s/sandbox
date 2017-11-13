import {html, render} from 'lit-html';
import {repeat} from 'lit-html/lib/repeat';
export default class GithubReposWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });

    this.init();
  }

  init() {
    const user = this.getAttribute('data-user');
    fetch(`https://api.github.com/users/${user}/repos`, {
      mode: 'cors'
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        res.json().then((data) => {
          render(this.render(data), this.shadowRoot);
        });
      });
  }

  render(data) {
    return html`<style>
      * {
        margin: 0;
        padding: 0;
      }
      .repo-list {
        list-style: none;
      }
      .repo-item {
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        padding: 10px 0;
        color: #2a2a2a;
        text-decoration: none;
        
        margin-bottom: 15px;
      }
      .repo-item-thumb {
        width: 80px;
        height: 80px;
        background-color: #eee;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        border: 1px solid #eee;
        
        margin-left: 10px;
      }
      .repo-item-body {
        padding: 0 20px;
      }
    </style>
      <ul class="repo-list">
      ${repeat(data, (el) => el.html_url, (el, index) => html`
        <li>
          <a href="${el.html_url}" class="repo-item">
            <div>
                <div 
                  class="repo-item-thumb"
                  style="background-image: url(${el.owner.avatar_url})"
                  >
                </div>
            </div>
            <div class="repo-item-body">
              <h2>${el.name}</h2>
              <p>${el.description}</p>
            </div>
          </a>
        </li>
      `)}
    </ul>`;
  }
}
