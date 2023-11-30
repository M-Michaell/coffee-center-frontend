import {Navigate, NavLink} from "react-router-dom";

export default function Known({children}){
    const user = localStorage.getItem("userInfo");
    return user ?  <Navigate to='/home'/> : children
}