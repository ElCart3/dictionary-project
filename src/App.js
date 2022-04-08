import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="text-center p-2">
          <small>
            This page was coded by Ellie and is{" "}
            <a href="https://github.com/ElCart3/dictionary-project">
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
