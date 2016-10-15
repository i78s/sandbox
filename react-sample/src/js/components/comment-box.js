import React, {Component} from 'react';

import CommentList from './comment-list';
import CommentForm from './comment-form';


export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.loadCommentsFromServer()
      .then((res) => {
        this.setState({data: res});
      });

    setInterval(() => {
      this.loadCommentsFromServer();
    }, this.props.pollInterval);
  }

  loadCommentsFromServer() {
    return fetch(this.props.url)
      .then((res) => {
        return res.json();
      });
  }

  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();

    let newComment = comments.concat([comment]);
    this.setState({data: newComment});

    // TODO: submit to the server and refresh the list
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}