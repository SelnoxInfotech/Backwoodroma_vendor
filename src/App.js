import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap';
import Router from "../src/Routes/Routing/Routing"
import SideNavbar from "./Components/Component/Navbar/Sidebar/SideNavbar"

function App() {
  return (
    <>
      <Router></Router>
      <SideNavbar />
    </>
  );
}

export default App;
