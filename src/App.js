import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/" exact component={HomePage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
