import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="container is-fullhd">
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title">Dictionary</p>
          <p className="subtitle">React App</p>
        </div>
      </section>
      <section className="section is-medium">
        <SearchBar />
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>Coded by Dani</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
