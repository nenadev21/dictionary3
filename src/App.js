import "./App.css";
import Layout from "./components/layout/Layout";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dictionary />
        <p>Testing something</p>
      </Layout>
    </div>
  );
}

export default App;
