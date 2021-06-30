import ReactDOM from "react-dom";
import React from 'react';
//
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
    return(
        <div>
            <EventComponent/>
        </div>
    )
};

export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))