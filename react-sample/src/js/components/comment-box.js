import React, {Component} from 'react';

import CommentList from './comment-list';
import CommentForm from './comment-form';


export default class CommentBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}