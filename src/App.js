import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import QuizSummary from "./pages/QuizSummary";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const titleContent = "ini adalah title";

  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/summary" component={QuizSummary} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
