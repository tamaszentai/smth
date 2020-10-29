import React, { useState } from "react";

import TopicTitle from "./TopicTitle";
import Comment from "./Comment";

const Topic = () => {
  const [title, setTitle] = useState({
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus velit id consequat cursus. Fusce at sapien lobortis, tincidunt orci eu, dignissim dui. Nullam posuere efficitur semper. Donec non tortor arcu.",
    author: "Nephatum",
  });

  const [comments, setComments] = useState([]);

  const sendHandler = (text) => {
    setComments((comments) => [text, ...comments]);
  };
  console.log(comments);
  
  const deleteCommentHandler = (id) => {
    setComments((comments.filter(comment => comment.id !== id)))
  }

  let commentNode = null;

  commentNode = comments.map((comment) => {
    return <Comment reply={comment.reply} author={comment.author} id={comment.id} deleteCommentHandler={deleteCommentHandler}/>;
  });

  return (
    <div className="Topic">
      <TopicTitle title={title} sendHandler={sendHandler} />
      {commentNode}
    </div>
  );
};

export default Topic;
