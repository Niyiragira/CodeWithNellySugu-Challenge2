import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlbumsPage from '../Pages/DisplayAlbumsPage';
import PhotoPage from "../Pages/DisplayPhotoPage"

export default class App extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={AlbumsPage} />
                        <Route path="/photo" component={PhotoPage} />
                     </Switch>
                 </Router>                
            </div>
        )
    }
}
