import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import AccountProfile from "./components/AccountProfile";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/account/profile" component={AccountProfile} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
