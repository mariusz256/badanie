import HomePage from "./containers/HomePage/HomePage";
import Examinations from "./containers/Examinations/Examinations";
import Layout from "./components/Layout/Layout";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="home" className="App">
      <Layout>
        <Switch>
          <Route path="/info" exact>
            <About />
          </Route>
          <Route path="/">
            <HomePage />
            <Examinations />
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
