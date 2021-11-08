import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Index } from "../zines/Index";
import { Home } from "./Home";
import { ReadingList } from "../zines/ReadingList";
import { Navbar } from "reactstrap";

export const Switch2 = () => {
    return (
        <React.Fragment>
            <Route>
                <Navbar />
                <Switch>
                    <Route exact path='/home' component={ Home } />
                    <Route exact path='/index' component={ Index } />  
                    <Route exact path='/readinglist' component={ ReadingList } />                  
                </Switch>
            </Route>
        </React.Fragment>
    )
}