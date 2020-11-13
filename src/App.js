import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RouteWrapper from "./components/RouteWraper/RouteWraper";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Examinations from "./pages/Examinations/Examinations";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <RouteWrapper
          path="/kontakt"
          exact
          component={Contact}
          layout={Layout}
        />
        <RouteWrapper
          path="/badania"
          exact
          component={Examinations}
          layout={Layout}
        />
      </Switch>
    </div>
  );
}

export default App;
