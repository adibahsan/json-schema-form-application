import logo from './logo.svg';
import './App.css';

import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const log = (type) => console.log.bind(console, type);


function App() {
  return (
    <div className="App">

      <div>
        <Form schema={schema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
      </div>
    </div>
  );
}

export default App;
