import {Navigate, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function PrivateAdmin({children}){
     const user = useSelector((state) => state.auth.userInfo);

    return  user.is_staff? children : <Navigate to='/home'/>
}
