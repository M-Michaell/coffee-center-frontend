// Router.js
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeTypeEdit from "../general_components/product_forms/CoffeeTypeEdit";



const PrivateRoute = React.lazy(()=> import("../pages/Auth/PrivateRoute"));
const DeleteUser= React.lazy(()=> import("../pages/delete_user/DeleteUser"));
const ActivatePage= React.lazy(()=> import("../pages/registration/Activation"));
const SendMail= React.lazy(()=> import("../pages/registration/SendMail"));
const Reset= React.lazy(()=> import("../pages/registration/Reset"));
const Order= React.lazy(()=> import("../pages/Order/OrderPage"));
const Checkout= React.lazy(()=> import("../pages/paypal/paypal"));
const TextDetails= React.lazy(()=> import("../pages/Details/text_details"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const Loader = React.lazy(() => import("../general_components/Loader/Loader"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Registration = React.lazy(() => import("../pages/registration/Registration"));
const Account = React.lazy(() => import("../pages/Profile/ProfilePage"));
const Search = React.lazy(() => import("../pages/Search/component/Search"));
const AddressForm = React.lazy(() => import("../pages/Profile/component/AddressForm"));
const AddressEdit = React.lazy(() => import("../pages/Profile/component/AddressEdit"))
const EditForm=React.lazy(()=>import("../pages/Auth/EditForm"));
const AdminDashboard = React.lazy(() => import("../general_components/AdminDashboard/adminhome"));
function Router() {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/product/details/:id" element={<TextDetails/>}/>
                <Route path="/cart" element={
                    <PrivateRoute>
                        <Cart/>
                    </PrivateRoute>
                    }/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/activate/:uid/:token" element={<ActivatePage/>}/>
                <Route path="/reset-password" element={<SendMail/>}/>
                <Route path="/delete-user" element={<DeleteUser/>}/>
                <Route path="/profile/edit-user" element={<EditForm/>}/>
                <Route path="/email/reset/confirm/:uid/:token" element={<Reset/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="order/:order_id" element={<Order/>}/>
                <Route path="registration/" element={<Registration/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="/profile/*" element={
                    <PrivateRoute>
                        <Account/>
                    </PrivateRoute>
                    }/>
                <Route path={`admin/`} element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                    }
                    />
                <Route path={`admin/:name`} element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                    }
                    />
                <Route path={`admin/:category/:name/:id/`} element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                    }
                    />
                <Route path={`admin/:category/:name/:id/:desc/:price/:quantity/`} element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                    }
                    />
                <Route path="/order/tracking/" element={<Account/>}/>
                <Route path="/search/:productname" element={<Search/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="home/" element={<Home/>}/>
                <Route path="registration/" element={<Registration/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="/profile/*" element={<Account/>}/>
                <Route path="/addressform/:id" element={<AddressEdit/>}/>
                <Route path="/addressform" element={<AddressForm/>}/>
                <Route path="/paypal/" element={<Checkout />} />
            </Routes>
        </Suspense>
    );
  // return (
  //   <Suspense fallback={<Loader />}>
  //     <Routes>
  //       <Route path="/product/details/" element={<TextDetails />} />
  //       <Route path="/cart" element={<Cart />} />
  //       <Route path="/" element={<Home />} />
  //       <Route path="order/" element={<Order />} />
  //       <Route path="registration/" element={<Registration />} />
  //       <Route path="login/" element={<Login />} />
  //       <Route path="/profile/*" element={<Account />} />
  //       <Route path="/order/tracking/" element={<Account />} />
  //       <Route path="/search/:productname" element={<Search />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </Suspense>
  // );
}
export default Router;