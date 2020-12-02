import HomePage from "./pages/HomePage/HomePage";
import Examinations from "./pages/Examinations/Examinations";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
        <Examinations />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
