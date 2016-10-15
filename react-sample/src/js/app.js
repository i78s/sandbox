import React from 'react';
import ReactDom from 'react-dom';

import CommentBox from './components/comment-box';

const data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

const commentBox = {
  render:  () => {
    ReactDom.render(
    <CommentBox data={data} />,
      document.getElementById('content')
    );
  }
};

commentBox.render();

//if (process.env.NODE_ENV === 'development') {
//
//}
