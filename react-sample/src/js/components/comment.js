import React, {Component} from 'react';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default class Comment extends Component {
  constructor() {
    super();
  }

  rawMarkup() {
    const raw = md.render(this.props.children.toString());
    return {
      __html: raw
    }
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}