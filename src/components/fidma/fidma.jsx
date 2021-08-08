import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import News from "./news";
import Posts from "./posts"


class Fidma extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/:post_id" component={Posts}/>
            
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Fidma;
