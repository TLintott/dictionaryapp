
import Dictionary from "./Dictionary";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Star" />
      </main>
      <footer className="App-footer"><small>Coded by TL and open-sourced on <a href="https://github.com/TLintott/dictionaryapp">Github</a></small></footer>
      </div>
    </div>
  );
}


