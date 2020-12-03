import HomePage from "./containers/HomePage/HomePage";
import Examinations from "./containers/Examinations/Examinations";
import Layout from "./components/Layout/Layout";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";

function App() {
  return (
    <div id="home" className="App">
      <Layout>
        <HomePage />
        <Examinations />
        <Contact />
        <About />
      </Layout>
    </div>
  );
}

export default App;
