import Home from "./views/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
