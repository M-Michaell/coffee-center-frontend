import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Navbarr from "./general_components/Header/header";
import Footerr from "./general_components/Footer/footer";
import {CookiesProvider} from "react-cookie";
function App() {
  return (
    <BrowserRouter>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,700;1,6..12,400;1,6..12,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
      </div>
      <div className="App">
        <Navbarr />
        <Router />
        <Footerr />
      </div>
    </BrowserRouter>
  );
}

export default App;
