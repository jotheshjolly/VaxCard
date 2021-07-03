import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import HomeHi from './components/Home/HomeHi';
import VaxRecord from "./components/VaxRecord/VaxRecord"
import UpComming from "./components/UpComming/UpCommingVax"
import Chatbot from "./components/Chatbot/Chatbot"
import Fade from 'react-reveal/Fade';

function App() {

  return (
    <Router>
      <Fade top>
        <Navbar />
      </Fade>
      <Chatbot />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/record' exact component={VaxRecord} />
        <Route path='/upcomming' exact component={UpComming} />
        <Route path='/hi' exact component={HomeHi} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
