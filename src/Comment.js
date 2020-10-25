import React from 'react';

import './Comment.css';

const Comment = (props) => {
  return(
    <div className="Comment">
      <h3>{props.reply}</h3>
      <h4>{props.author}</h4>
    </div>
  )
}

export default Comment;