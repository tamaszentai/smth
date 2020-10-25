import React, {useState} from 'react';

import './TopicTitle.css';

const TopicTitle = (props) => {

  const [text, setText] = useState('');

  const comment = {author: 'default', reply: text}

  const sendHandler = () => {
    props.sendHandler(comment)
  }

  let textarea = document.querySelector("textarea");
  const cancelHandler = () => {
    textarea.value = '';
  }

  const textHandler = (event) => {
    setText(event.target.value);
  }
  return(
    <div className="TopicTitle">
      <h3>{props.title.title}</h3>
      <textarea className="textarea" cols="150" rows="5" style={{resize: "none"}} onChange={textHandler}></textarea>
      <br />
      <button onClick={sendHandler}>Send</button>
      <button onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default TopicTitle;

