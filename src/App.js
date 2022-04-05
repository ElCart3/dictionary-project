import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-center">
          <Dictionary />
          <footer>
            <small>
              This page was coded by Ellie and is{" "}
              <a href="https://github.com/ElCart3/dictionary-project">
                open-sourced
              </a>
            </small>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
