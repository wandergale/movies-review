import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">Movies Review</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="search">Search</Link>
      </nav>
      <h2>Movies review</h2>
      <Outlet />
    </div>
  );
}

export default App;
