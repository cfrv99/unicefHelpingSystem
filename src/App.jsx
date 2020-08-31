import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Route, Switch } from "react-router";
import { CreatePost } from "./components/CreatePost";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <br />
      <br />
      <Switch>
        <Route exact path="/create" component={CreatePost} />
      </Switch>
    </Container>
  );
}

export default App;
