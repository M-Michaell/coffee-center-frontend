import {Navigate, NavLink} from "react-router-dom";

export default function PrivateRoute({children}){
    const user = localStorage.getItem("userInfo");
    return user ? children : <Navigate to='/login'/>
}