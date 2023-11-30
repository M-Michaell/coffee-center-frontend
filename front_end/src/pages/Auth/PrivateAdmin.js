import {Navigate, NavLink} from "react-router-dom";

export default function PrivateAdmin({children}){
    const user = localStorage.getItem("userInfo");
    return user.is_stuff ? children : <Navigate to='/*'/>
}
