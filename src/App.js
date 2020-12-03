import HomePage from "./pages/HomePage/HomePage";
import Examinations from "./pages/Examinations/Examinations";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

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
