import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/globalStyles.css';

function App() {
  return (
    <div className="container-fluid">
      <h2>Navigation</h2>

      <ul className="nav nav-pills nav-justified">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/ProductList">CRUD</Link></li>
        <li className="nav-item"><Link to="/ProductPage">Product Page</Link></li>
        <li className="nav-item"><Link to="/TableComponent">Table Component</Link></li>
      </ul>

      {/* This shows the routed components */}
      <Outlet />
    </div>
  );
}

export default App;
