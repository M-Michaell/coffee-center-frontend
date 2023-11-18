import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {axiosInstance} from "../../apis/config";
import {useNavigate} from "react-router-dom";
import {resetPassword} from "../../store/slices/auth";
import { toast } from 'react-toastify'



export default function SendMail() {
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({

        email: "",

    });

    const [err, setErr] = useState({

        email: null,

    });

    const handleInput = (e) => {
        if (e.target.name === 'email') {
            setFormInput({...formInput, email: e.target.value});
            setErr({
                ...err, email:
                    emailRegex.test(e.target.value)
                        ? null
                        : e.target.value.length === 0
                            ? "This field is required"
                            : "Enter a valid email address example , xxx@example.com",
            });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(resetPassword({...formInput}));
    };
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("A reset password email has been sent to you.")

        }


    }, [isError, isSuccess, message, navigate, dispatch])




    return (
        <div className="text-start" style={{color: "var(--gray1)"}}>
            <form className="p-5 mb-5 mx-auto my-5"
                  onSubmit={handleSubmit}
                  style={{
                      maxWidth: "900px",
                      borderColor: "var(--orange)",
                      border: "3px solid var(--orange)",
                      boxShadow: "1px 1px 40px var(--orange)",
                  }}
            >
                <h1 className="text-center">Send email</h1>

                <div className="col-md-4 w-100">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Email</label>
                    <input onChange={handleInput}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="email"
                           value={formInput.email}
                           type="email"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                {err.email && (<h6 className="form-text text-danger fs-5">{err.email}</h6>)}


                <div className=" d-flex justify-content-center">
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-50"
                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Send Email
                    </button>
                </div>
            </form>
        </div>
    );
}
