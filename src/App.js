import React from 'react';
import { render } from 'react-dom';
import Homepage from './page/Homepage';
import './styles.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Order from './page/Order';
import {MenuContextProvider} from "./context/MenuContext"

class App extends React.Component {
    render() {
        return <div>
            <BrowserRouter>
            <Switch>
                 <Route exact path="/"> <Homepage /></Route>
                 <Route path="/order"><Order /></Route>
            </Switch>
            </BrowserRouter>
            </div>
    }
}

render(<MenuContextProvider>
        <App />
        </MenuContextProvider>, 
        document.getElementById('root'));
