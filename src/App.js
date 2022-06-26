import logo from './logo.svg';
import './App.css';

import Form from "react-jsonschema-form";
import {type} from "@testing-library/user-event/dist/type";

// const schema = {
//     title: "Todo",
//     type: "object",
//     required: ["title"],
//     properties: {
//         title: {type: "string", title: "Title", default: "A new task"},
//         done: {type: "boolean", title: "Done?", default: false}
//     }
// };

const log = (type) => console.log.bind(console, type);


const schema = {
    type: "string"
};

function MyCustomWidget(props) {
    console.log("props", props)
    const {options, rawErrors} = props;
    console.log("rawErrors", type(rawErrors));
    const {color, backgroundColor, borderColor, borderWidth, width} = options;
    return <input style={{color, backgroundColor, borderColor, borderWidth}}
                  className={rawErrors!=null && rawErrors.length>0 ? "justError" : null}/>;
}

MyCustomWidget.defaultProps = {
    options: {
        color: "red",
        backgroundColor: "pink",
        borderColor: "purple",
        borderWidth: 5,
        width: 15
    }
};

const uiSchema = {
    "ui:widget": MyCustomWidget,
    "ui:options": {
        color: "black",
        textAlign: "center",
        backgroundColor: "yellow"
    }
};


function App() {
    return (
        <div className="App">

            <div>
                <Form schema={schema}
                      uiSchema={uiSchema}
                      onChange={
                          log("changed")
                      }
                      onSubmit={
                          log("submitted")
                      }
                      liveValidate={true}
                      onError={log("errors")}/>
            </div>
        </div>
    );
}

export default App;
