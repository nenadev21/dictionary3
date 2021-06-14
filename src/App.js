import SearchBar from "./components/SearchBar";
import "./App.css";
import SocialMedia from "./SocialMedia";

function App() {
  return (
    <div className="container is-max-widescreen">
      <section className="hero is-small is-primary has-text-centered">
        <div className="hero-body">
          <p className="title">Dictionary</p>
        </div>
      </section>
      <section className="section is-medium">
        <SearchBar />
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
}

export default App;
