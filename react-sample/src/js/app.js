import React from 'react';
import ReactDom from 'react-dom';

import CommentBox from './components/comment-box';

const commentBox = {
  render:  () => {
    ReactDom.render(
    <CommentBox url="/api/comments.json" pollInterval={2000} />,
      document.getElementById('content')
    );
  }
};

commentBox.render();

//if (process.env.NODE_ENV === 'development') {
//
//}
