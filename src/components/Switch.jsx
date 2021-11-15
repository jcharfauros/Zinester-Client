import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "reactstrap";
import Index from '../zines/Index';
import ComicIndex from "../comics/ComicIndex";

export const Switch2 = () => {
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
}