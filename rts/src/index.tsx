import ReactDOM from "react-dom";
import React from 'react';
//
import GuestList from "./state/GuestList";

const App = () => {
    return(
        <div>
            <GuestList/>
        </div>
    )
};

export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))