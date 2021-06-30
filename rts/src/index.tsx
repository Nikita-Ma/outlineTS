import ReactDOM from "react-dom";
import React from 'react';
//
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
    return(
        <div>
            <UserSearch/>
        </div>
    )
};

export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))