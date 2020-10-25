import React, {useState} from 'react';

import './TopicTitle.css';

const TopicTitle = (props) => {

  const [text, setText] = useState('');

  const comment = {author: 'default', reply: text}

  const sendHandler = () => {
    props.sendHandler(comment)
  }

  const textHandler = (event) => {
    setText(event.target.value);
  }
  return(
    <div className="TopicTitle">
      <h3>{props.title.title}</h3>
      <textarea onChange={textHandler}></textarea>
      <button onClick={sendHandler}>Send</button>
    </div>
  )
}

export default TopicTitle;