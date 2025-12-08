import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <h2>Navigation</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ProductList">CRUD</Link></li>
      </ul>

      {/* This shows the routed components */}
      <Outlet />
    </div>
  );
}

export default App;
