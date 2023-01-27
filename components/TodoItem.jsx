import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setDone] = useState(false);
  function handleClick() {
    setDone((previous) => {
      return !previous;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
