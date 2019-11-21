import React from "react";
import ReactDOM from "react-dom";

import TextField from "@material-ui/core/TextField";

function App() {
  const inputRef = React.useRef();
  const [selectionStart, setSelectionStart] = React.useState();
  const updateSelectionStart = () =>
    setSelectionStart(inputRef.current.selectionStart);
  return (
    <div className="App">
      <TextField
        onSelect={updateSelectionStart}
        inputRef={inputRef}
        defaultValue="Initial Text"
      />
      <br />
      <br />
      selectionStart: {selectionStart}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
