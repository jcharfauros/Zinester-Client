import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "reactstrap";
import Index from '../zines/Index';
import ComicIndex from "../comics/ComicIndex";

class Switch2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/home' component={ Home } />
                    <Route exact path='/index' component={ Index } />  
                    <Route exact path='/comicindex' component={ ComicIndex } />             
                </Switch>        
        </React.Fragment>
        )
    };
}

export default Switch2;