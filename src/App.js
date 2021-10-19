  import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     <section>
       <nav>
         <ul>
         <li> <Link to="/Home">Home</Link></li>
         <li> <Link to="/Movie">Movies</Link></li>
          <li> <Link to="/About">About pages Link</Link></li>
             <li> <Link to="/About">About pages Link</New></li>
         </ul>
       </nav>
     </section>
      </header>
      <Switch>
        <Route path="/Movie">Movie pages</Route>
        <Route path="/About">About pages</Route>
        <Route path="/">Welcome to the pages</Route>
        </Switch>
    </div>
  );
}

export default App;
