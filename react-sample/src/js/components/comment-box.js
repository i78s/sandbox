import React, {Component} from 'react';

import CommentList from './comment-list';
import CommentForm from './comment-form';


export default class CommentBox extends Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}