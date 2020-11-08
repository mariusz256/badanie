import logo from "./logo.svg";
import Header from "./components/Header/Header";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
