// Import React and ReactDOM libraries

import react from "react";
import ReactDOM from "react-dom";

// Create a react Component

const submit = () =>{
    return "Submit!";
}

const App = () => {

    const greating = "Hello world!!";
    return (
      <div>
          <label className="label" for="name">
              Enter name:
          </label>
          <input id="name" type="text" />
          <button style= {{backgroundColor: "blue", color: 'white'}}> {submit()}</button>

          <h3> {greating}</h3>
      </div>
    )
}

// Take the react component and show it on the screen

ReactDOM.render(<App />,document.querySelector('#root'))