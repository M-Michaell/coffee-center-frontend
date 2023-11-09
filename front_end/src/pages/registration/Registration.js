import React, {useState} from "react";
import image2 from "../../assets/images/pexels-photo-3879495.webp";

export default function RegistrationForm() {
    const specialCharsRegex = /[^a-zA-Z0-9]/;
    const capitalLetterRegex = /[A-Z]/;
    const letterRegex = /[a-z]/;
    const [formInput, setFormInput] = useState({
        fname: "",
        lname: "",
        email: "",
        userName: "",
        password: '',
        // confirmPassword: '',
        // checked: false,

    })
    const [err, seterr] = useState({
        fname: null,
        lname: null,
        email: null,
        userName: null,
        password: null,
        confirmPassword: null,
        checked: null,

    })
    const handeler = (e) => {
        if (e.target.name === 'lname') {
            setFormInput({...formInput, lname: e.target.value});
        }
        if (e.target.name === 'fname') {
            setFormInput({...formInput, fname: e.target.value});
        }
        if (e.target.name === 'password') {
            setFormInput({...formInput, password: e.target.value});
            seterr({
                ...err,
                password:
                    e.target.value.length < 8 ? "length should be 8 or more" : null
                    || !specialCharsRegex.test(e.target.value) ? "must have special char" : null
                    || !letterRegex.test(e.target.value) ? "must have 1 letter at lest" : null
                    || !capitalLetterRegex.test(e.target.value) ? "must have captial letter" : null
            });
        }
        if (e.target.name === 'user') {
            setFormInput({...formInput, userName: e.target.value})
            seterr({...err, userName: !letterRegex.test(e.target.value) ? "must have 1 letter at lest" : null});

        }
        if (e.target.name == 'email') {
            setFormInput({...formInput, email: e.target.value})

        }
        if (e.target.name === 'confirm') {
            // setFormInput({...formInput, confirmPassword: e.target.value});
            seterr({...err, confirmPassword: e.target.value !== formInput.password ? "password dont match" : null});
        }
    }
    const submited = (e) => {
        e.preventDefault();
        console.log(formInput);
    }
    return (
        <div className="text-start "
             style={{color:"var(--gray1)"}}
        >
            <form className="p-5 mb-5 mx-auto my-5 "
                  onSubmit={submited}
                  style={{
                      maxWidth: "900px",
                      borderColor: "var(--orange)",
                      border: "3px solid var(--orange)",
                      boxShadow: "1px 1px 40px var(--orange)",

                  }}
            >
                <h1 className="text-center">Registration</h1>
                <div className="col-md-4 w-75">
                    <label for="validationDefault01"
                           style={{color:"var(--gray1)" ,fontSize:"18px"}}
                           className="form-label mt-3">First name</label>
                    <input value={formInput.fname}
                           style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}
                           onChange={handeler}
                           name='fname' type="text"
                           pattern="[a-zA-Z]+"
                           className="form-control"
                           id="validationDefault01"
                           required/>
                </div>
                <div className="col-md-4 w-75">
                    <label for="validationDefault02"
                           style={{color:"var(--gray1)",fontSize:"18px"}}
                           className="form-label mt-3">Last name</label>
                    <input value={formInput.lname}
                           style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}
                           name="lname"
                           onChange={handeler}
                           type="text"
                           pattern="[a-zA-Z]+"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                {err.fname && (<h6 className="form-text text-danger">{err.fname}</h6>)}

                <div className="col-md-4 w-75">
                    <label for="validationDefault02"
                           style={{color:"var(--gray1)", fontSize:"18px"}}
                           className="form-label text-start mt-2">Email</label>
                    <input onChange={handeler}
                           style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}
                           name="email"
                           value={formInput.email}
                           type="email"
                           pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                <div className="col-md-4 w-75">
                    <label for="validationDefaultUsername"
                            style={{color:"var(--gray1)", fontSize:"18px"}}
                           className="form-label mt-2">User Name</label>
                    <div className="input-group">
                    <span className="input-group-text"
                          style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}
                          id="inputGroupPrepend2">@</span>
                        <input onChange={handeler}
                               style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)",  fontSize:"20px" ,color:"var(--orange)"}}
                               name="user"
                               value={formInput.userName}
                               type="text"
                               className="form-control"
                               id="validationDefaultUsername"
                               aria-describedby="inputGroupPrepend2"
                               required/>
                    </div>
                </div>
                {err.userName && (<h6 className="form-text text-danger fs-5">{err.userName}</h6>)}

                <div className="col-md-4 w-75">
                    <label for="inputPassword6"
                            style={{color:"var(--gray1)", fontSize:"20px"}}
                           className="col-form-label mt-2">Password</label>
                </div>
                <div class="col-md-4 w-75">
                    <input onChange={handeler}
                           style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}
                           type="password"
                           id="inputPassword6"
                           name='password'
                           className="form-control"
                           aria-describedby="passwordHelpInline"/>
                </div>
                    {err.password && (<h6 id="passwordHelp" className="form-text text-danger fs-5">{err.password}</h6>)}


                <div className="col-md-4 w-75">
                    <label for="validationDefault02"
                            style={{color:"var(--gray1)", fontSize:"20px"}}
                           className="form-label mt-2">confirm passwrd</label>
                    <input onChange={handeler}
                           style={{backgroundColor:"var(--gray2)", borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}

                           name='confirm'
                           type="password"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>
                {err.confirmPassword && (<h6 className="form-text text-danger fs-5">{err.confirmPassword}</h6>)}
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input mt-3"
                               style={{backgroundColor:"var(--orange)"}}
                               type="checkbox"
                               value=""
                               id="invalidCheck2"
                               required/>
                        <label className="form-check-label mt-2"
                           style={{borderColor:"var(--orange)", fontSize:"20px" ,color:"var(--orange)"}}

                               for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn rounded-pill btn-block mb-4 mt-3"
                             style={{ backgroundColor: " var(--orange) ", color:"var(--fff)", fontSize:"18px" }}
                            type="submit">Sign Up
                    </button>
                </div>
            </form>
        </div>

    );
}