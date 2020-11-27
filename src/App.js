import HomePage from "./pages/HomePage/HomePage";
import Examinations from "./pages/Examinations/Examinations";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
        <Examinations />
      </Layout>
    </div>
  );
}

export default App;
