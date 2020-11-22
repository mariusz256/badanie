import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Examinations from "./pages/Examinations/Examinations";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/" exact component={HomePage} />
          <Route path="/badania" exact component={Examinations} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
