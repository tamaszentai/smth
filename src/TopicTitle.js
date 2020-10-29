import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./TopicTitle.css";

const TopicTitle = (props) => {
  const [text, setText] = useState("");

  const comment = { author: "default", reply: text, id: uuidv4() };

  const sendHandler = () => {
    if (text !== "" && text !== null) {
      props.sendHandler(comment);
      clearState();
      clear();
    }
  };

  const clear = () => {
    document.querySelector("textarea").value = "";
  };

  const clearState = () => {
    setText(null);
  };

  const cancelHandler = () => {
    clearState();
    clear();
  };

  const textHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="TopicTitle">
      <h3>{props.title.title}</h3>
      <textarea
        id="textarea"
        cols="150"
        rows="5"
        style={{ resize: "none" }}
        onChange={textHandler}
      ></textarea>
      <br />
      <button onClick={sendHandler}>Send</button>
      <button onClick={cancelHandler}>Cancel</button>
    </div>
  );
};

export default TopicTitle;
