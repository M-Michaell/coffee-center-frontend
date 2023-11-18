import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {axiosInstance} from "../../apis/config";
import {useNavigate} from "react-router-dom";
import { reset} from "../../store/slices/auth";
import { toast } from 'react-toastify'
import {resetPasswordConfirm} from "../../store/slices/auth";
import {useParams} from "react-router-dom";

export default function Reset() {
    const { uid, token } = useParams()
    const specialCharsRegex = /[^a-zA-Z0-9]/;
    const capitalLetterRegex = /[A-Z]/;
    const letterRegex = /[a-z]/;
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
         new_password: '',
        re_new_password: '',
    });

    const [err, setErr] = useState({
        new_password: null,
        re_new_password: null,

    });

    const handleInput = (e) => {
        if (e.target.name === 'password') {
            setFormInput({...formInput, new_password: e.target.value});
            setErr({
                ...err,
                new_password:
                    e.target.value.length < 8 ? "length should be 8 or more" : null
                    || !specialCharsRegex.test(e.target.value) ? "must have special char" : null
                    || !letterRegex.test(e.target.value) ? "must have 1 letter at least" : null
                    || !capitalLetterRegex.test(e.target.value) ? "must have capital letter" : null
            });
        }
        if (e.target.name === 'confirmPassword') {
            setFormInput({...formInput, re_new_password: e.target.value})
            setErr({...err, re_new_password: e.target.value !== formInput.new_password ? "passwords don't match" : null});
        }

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(resetPasswordConfirm({uid, token,...formInput}))

    };
     useEffect(() => {
         if (isError) {
             toast.error(message)
         }
         if (isSuccess) {
             navigate("/login")
             toast.success("Your password was reset successfully.")

         }
     });

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
                <h1 className="text-center">Reset Password</h1>

                <div className="col-md-4 w-75">
                    <label htmlFor="inputPassword6"
                           style={{color: "var(--gray1)", fontSize: "20px"}}
                           className="col-form-label mt-2">New Password</label>
                </div>
                <div className="col-md-4 w-100">
                    <input onChange={handleInput}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           type="password"
                           id="inputPassword6"
                           name='password'
                           className="form-control"
                           aria-describedby="passwordHelpInline"/>
                </div>
                {err.new_password && (<h6 id="passwordHelp" className="form-text text-danger fs-5">{err.new_password}</h6>)}

                <div className="col-md-4 w-100">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "20px"}}
                           className="form-label mt-2">Confirm Password</label>
                    <input onChange={handleInput}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name='confirmPassword'
                           type="password"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                {err.re_new_password && (<h6 className="form-text text-danger fs-5">{err.re_new_password}</h6>)}



                <div className="d-flex justify-content-center mt-5">
                    <button className="btn rounded-pill btn-block mb-4 mt-3 w-50"
                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Reset
                    </button>
                </div>
            </form>
        </div>
    );
}
