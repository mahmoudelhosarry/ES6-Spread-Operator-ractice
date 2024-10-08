import React, { useState } from "react";

function App() {
  const [x, setx] = useState("");
  const [y, sety] = useState([]);
  function tree(event) {
    const mahmoud = event.target.value;
    setx(mahmoud);
  }
  function orange() {
    sety((prevValue) => {
      return [...prevValue, x];
    });
    setx("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={tree} value={x} />
        <button onClick={orange}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {" "}
          {y.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
