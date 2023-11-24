import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {editUser, reset} from "../../store/slices/auth";
import { toast } from 'react-toastify'

export default function EditForm() {
    const userInfo = useSelector((state)=>state.auth.userInfo)

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const specialCharsRegex = /[^a-zA-Z0-9]/;
    const capitalLetterRegex = /[A-Z]/;
    const letterRegex = /[a-z]/;
    const phoneRegex = /^(?:\+20|0)?1[0-2]\d{8}$/;
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
         username: userInfo.username,
        first_name: userInfo.first_name,
        phone: userInfo.phone,
        last_name: userInfo.last_name,
        // is_staff: userInfo.is_staff,
    });

    const [err, setErr] = useState({
        first_name: null,
        last_name: null,
        phone: null,
        username: null,
        checked: null,
    });

    const handleInput = (e) => {
        if (e.target.name === 'last_name') {
            setFormInput({...formInput, last_name: e.target.value});
        }
        if (e.target.name === 'first_name') {
            setFormInput({...formInput, first_name: e.target.value});
        }

        if (e.target.name === 'username') {
            setFormInput({...formInput, username: e.target.value})
            setErr({...err, username: !letterRegex.test(e.target.value) ? "must have 1 letter at least" : null});
        }


        if (e.target.name === 'phone') {
            setFormInput({...formInput, phone: e.target.value});
            setErr({...err, phone: !phoneRegex.test(e.target.value) ? "write correct phone number" : null})
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(editUser({...formInput}));

    };
     useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("your account updated successfully")
        }
        dispatch(reset())
    }, [isError, isSuccess])


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
                <h1 className="text-center">Edit My Info</h1>
                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault01"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">First name</label>
                    <input value={formInput.first_name}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           onChange={handleInput}
                           name='first_name' type="text"
                           pattern="[a-zA-Z]+"
                           className="form-control"
                           id="validationDefault01"
                           required/>
                </div>
                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Last name</label>
                    <input value={formInput.last_name}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="last_name"
                           onChange={handleInput}
                           type="text"
                           pattern="[a-zA-Z]+"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                {err.first_name && (<h6 className="form-text text-danger">{err.first_name}</h6>)}

                <div className="col-md-4 w-75">
                    <label htmlFor="phone"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Phone Number</label>
                    <input value={formInput.phone}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="phone"
                           onChange={handleInput}
                           type="text"
                           className="form-control"
                           id="phone"
                           required/>
                </div>
                {err.phone && (<h6 className="form-text text-danger fs-5">{err.phone}</h6>)}


                 <div className="col-md-4 w-75">
                    <label htmlFor="validationDefaultUsername"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-2">User Name</label>
                    <div className="input-group">
                    <span className="input-group-text"
                          style={{
                              backgroundColor: "var(--gray2)",
                              borderColor: "var(--orange)",
                              fontSize: "20px",
                              color: "var(--orange)"
                          }}
                          id="inputGroupPrepend2">@</span>
                        <input onChange={handleInput}
                               style={{
                                   backgroundColor: "var(--gray2)",
                                   borderColor: "var(--orange)",
                                   fontSize: "20px",
                                   color: "var(--orange)"
                               }}
                               name="username"
                               value={formInput.username}
                               type="text"
                               className="form-control"
                               id="validationDefaultUsername"
                               aria-describedby="inputGroupPrepend2"
                               required/>
                    </div>
                </div>
                {err.username && (<h6 className="form-text text-danger fs-5">{err.username}</h6>)}


                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input mt-3"
                               style={{backgroundColor: "var(--orange)"}}
                               type="checkbox"
                               value=""
                               id="invalidCheck2"
                               required/>
                        <label className="form-check-label mt-2"
                               style={{borderColor: "var(--orange)", fontSize: "20px", color: "var(--orange)"}}
                               htmlFor="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-50"
                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}
