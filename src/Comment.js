import React from 'react';

import './Comment.css';

const Comment = (props) => {
  
  const deleteCommentHandler = () =>{
    props.deleteCommentHandler(props.id)
  }

  return(
    <div className="Comment">
      <h3>{props.reply}</h3>
      <h4>{props.author}</h4>
      <button onClick={deleteCommentHandler}>Delete comment</button>
    </div>
  )
}

export default Comment;