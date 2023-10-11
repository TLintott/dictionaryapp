import logotl from "./logotl.png";
import Dictionary from "./Dictionary";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src={logotl} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"><small>Coded by TL</small></footer>
      </div>
    </div>
  );
}


