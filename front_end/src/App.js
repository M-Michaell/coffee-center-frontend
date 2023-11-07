import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Navbarr from "./general_components/Header/header";
import Footerr from "./general_components/Footer/footer";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbarr/>
      <Router/>
      <Footerr/>
    </div>
    </BrowserRouter>
  );
}

export default App;
