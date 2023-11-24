import React, {useState, useEffect} from "react";
import {axiosInstance} from "../../apis/config";
import {useNavigate, useParams} from "react-router-dom";

import {toast} from 'react-toastify'
import {CoffeeTypes} from "../../apis/add_categories";

export default function CoffeeTypeEdit({submitAdd}) {
     const coffeeTypes = CoffeeTypes();
    const {id, name} = useParams();
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({

        name: name,

    });

    const handleInput = (e) => {
        if (e.target.name === 'coffeeType') {
            setFormInput({...formInput, name: e.target.value});

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.put(`coffeeType/${id}/`, formInput);
            toast.success("Edit Sucessfully");
             window.location.reload();
             submitAdd(1);
        } catch (error) {

            if (error.response) {

                console.error('Server Error:', error.response.data);
                toast.error(error.response.data.name || 'Server Error');
            } else if (error.request) {

                console.error('Request Error:', error.request);
                toast.error('Request Error: No response received');
            } else {
                console.error('Error:', error.message);
                toast.error('Error: Something went wrong');
            }
        }

    };
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
                <h1 className="text-center">Edit coffee type</h1>

                <div className="col-md-4 w-100">
                    <label htmlFor="coffeeType"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">name</label>
                    <input
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        name="coffeeType"
                        value={formInput.name}
                        onChange={handleInput}
                        type="text"
                        className="form-control"
                        id="coffeeType"
                        required/>
                </div>

                <div className=" d-flex justify-content-around">
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-25"

                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Edit
                    </button>
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-25"
                            onClick={()=> submitAdd(1)}
                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Cansel
                    </button>
                </div>
            </form>
        </div>
    );
}
