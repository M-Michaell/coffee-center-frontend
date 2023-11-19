import React, {useState, useEffect} from "react";
import image2 from "../../assets/images/pexels-photo-3879495.webp";
import "../Cart/main.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login, getUserInfo, reset} from "../../store/slices/auth";
import {toast} from 'react-toastify'
import {NavLink} from "react-router-dom";


function Login() {
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Form, setForm] = useState({
        email: "",
        password: "",
    });
    const [FormErr, setFormErr] = useState({
        email: null,
        password: null,
    });

    const handleFormChange = (e) => {
        if (e.target.name === "email") {
            const email = e.target.value;
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            setForm({
                ...Form,
                email: e.target.value,
            });

            setFormErr({
                ...FormErr,
                email: emailRegex.test(email)
                    ? null
                    : email.length === 0
                        ? "This field is required"
                        : "Enter a valid email address example , xxx@example.com",
            });
        }
        if (e.target.name === "password") {
            const password = e.target.value;
            const passwordRegex = /^.{8,}$/;
            setForm({
                ...Form,
                password: password,
            });

            setFormErr({
                ...FormErr,
                password: passwordRegex.test(password)
                    ? null
                    : password.length === 0
                        ? "This field is required"
                        : "Your password should Contain at least 8 characters ",
            });
        }
    };
    useEffect(() => {
        if (isError) {
            toast.error("Enter correct Email & Password")
        }
        if (isSuccess && user) {
            toast.success("login successfully")
            dispatch(getUserInfo())
            navigate("/")
        }
        dispatch(reset())
    }, [isError, isSuccess, user, navigate, dispatch])

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        dispatch(login({...Form}));
    };

    return (
        <div>
            <div className="  m-3 d-flex ">
                <div className="mb-5 mx-auto my-5 h-100 ">
                    {/*{err && <h3>{err}</h3>}*/}
                    <div
                        className="row g-0  rounded-5 "
                        style={{
                            maxWidth: "900px",
                            borderColor: "var(--orange)",
                            border: "3px solid var(--orange)",
                            boxShadow: "1px 1px 40px var(--orange)",
                        }}
                    >
                        <div className="col-md-6 shadow-5">
                            <img
                                src={image2}
                                className="img-fluid rounded-start shadow-4"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6 background d-flex justify-content-center align-items-center">
                            <div className=" mx-5  text-nowrap background">
                                <h3 className=" fff">Login</h3>

                                <div className="row g-2">
                                    <div className="text-start ">
                                        {/* <!-- Pills content --> */}

                                        <form>
                                            {/* <!-- Email input --> */}
                                            <label
                                                htmlFor="inputeail"
                                                className="form-label text-start"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                id="inputeail"
                                                onChange={handleFormChange}
                                                className={`form-control ${
                                                    FormErr.email ? "border border-danger" : ""
                                                }`}
                                                aria-describedby="passwordHelpBlock"
                                            />
                                            {FormErr.email && (
                                                <p
                                                    id="passHelping"
                                                    className="form-text text-danger text-wrap "
                                                >
                                                    {FormErr.email}
                                                </p>
                                            )}

                                            {/* <!-- 2 column grid layout --> */}
                                            <label
                                                htmlFor="inputPassword5"
                                                className="form-label text-start mt-3"
                                            >
                                                Password
                                            </label>
                                            <input
                                                name="password"
                                                type="password"
                                                id="inputPassword5"
                                                onChange={handleFormChange}
                                                className={`form-control ${
                                                    FormErr.password ? "border border-danger" : ""
                                                }`}
                                                aria-describedby="passwordHelpBlock"
                                            />
                                            {FormErr.password && (
                                                <p
                                                    id="passHelping"
                                                    className="form-text text-danger text-wrap"
                                                >
                                                    {FormErr.password}
                                                </p>
                                            )}

                                            {/* <!-- 2 column grid layout --> */}
                                            <div className="row mb-4 mt-3">
                                                <div className="col-md-6 d-flex justify-content-center">
                                                    {/* <!-- Checkbox --> */}
                                                    <div className="form-check mb-3 mb-md-0">
                                                        <input
                                                            className="form-check-input bg-transperant"
                                                            type="checkbox"
                                                            value=""
                                                            id="loginCheck"
                                                        />
                                                        <label
                                                            className="form-check-label gray1 "
                                                            htmlFor="loginCheck"
                                                        >
                                                            {" "}
                                                            Remember me{" "}
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 d-flex justify-content-center orange">
                                                    {/* <!-- Simple link --> */}
                                                    <NavLink to="/reset-password" className="orange">
                                                        Forgot password?
                                                    </NavLink>
                                                </div>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button
                                                type="submit"
                                                className="btn rounded-pill btn-block mb-4 fff"
                                                style={{backgroundColor: " var(--orange) "}}
                                                onClick={handleSubmit}
                                            >
                                                Login in
                                            </button>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center ">
                                                <p className="gray1">
                                                    Not a member?{" "}
                                                    <a className="orange" href="#!">
                                                        Register
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-register"
                                        role="tabpanel"
                                        aria-labelledby="tab-register"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
