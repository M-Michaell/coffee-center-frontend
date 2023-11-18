import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Router from "./Router/router";
import Navbarr from "./general_components/Header/header";
import Footerr from "./general_components/Footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserDataAPI } from "./apis/cartOperations/getUserData";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.auth?.userInfo?.id);
  
    useEffect(() => {
      const fetchData = async () => {
        if (userId) {
      
          await UserDataAPI(userId, dispatch);
        
        }
      };
  
      fetchData();
    }, [userId, dispatch]);
  

  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,700;1,6..12,400;1,6..12,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
      </div>
      <div className="App">
        <Navbarr />
        <Router />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          limit={4}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Footerr />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
