import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/js/bootstrap';
import Router from "../src/Routes/Routing/Routing"
import SiderNavbar from "./Components/Component/Navbar/Sidebar/SideNavbar"
import Layout from "./Layout/Layout"

function App() {
  return (
    <>
      {/* <SiderNavbar></SiderNavbar>
      <Router></Router> */}
      <Layout></Layout>
    </>
  );
}

export default App;
