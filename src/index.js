import React from "react"; 
import ReactDOM from "react-dom";

class Base extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<Base />, document.getElementById("root")); 