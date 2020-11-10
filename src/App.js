import logo from "./logo.svg";
import Header from "./components/Header/Header";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
