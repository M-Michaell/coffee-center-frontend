import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {axiosInstance} from "../../apis/config";
import {useNavigate} from "react-router-dom";
import {register, reset} from "../../store/slices/auth";
import {toast} from 'react-toastify'
import Loader from "../../general_components/Loader/Loader";
import {CreatorsData, CaffeinesData, CoffeeTypes, RoastingDegrees, Origins, Discounts} from "../../apis/add_categories";

export default function ProductForm({submitAdd}) {
    const creators = CreatorsData();
    const caffeines = CaffeinesData();
    const coffeeTypes = CoffeeTypes();
    const roastingDegrees = RoastingDegrees();
    const origins = Origins();
    const discounts = Discounts();
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState(null);
    const [formInput, setFormInput] = useState({
        name: "",
        desc: "",
        quantity: "",
        price: '',
        image: null,
        coffee_type: "",
        caffeine: '',
        creator: '',
        roasting_degree: '',
        origin: '',
        discount: '',
    });


    const handleInput = (e) => {
        if (e.target.name === 'name') {
            setFormInput({...formInput, name: e.target.value});
        }
        if (e.target.name === 'Description') {
            setFormInput({...formInput, desc: e.target.value});
        }
        if (e.target.name === 'Quantity') {
            setFormInput({...formInput, quantity: e.target.value});
        }
        if (e.target.name === 'price') {
            setFormInput({...formInput, price: e.target.value});
        }
        if (e.target.name === 'coffee_type') {
            setFormInput({...formInput, coffee_type: e.target.value});
        }
        if (e.target.name === 'caffeine') {
            setFormInput({...formInput, caffeine: e.target.value});
        }
        if (e.target.name === 'creator') {
            setFormInput({...formInput, creator: e.target.value});
        }
        if (e.target.name === 'roastingDegree') {
            setFormInput({...formInput, roasting_degree: e.target.value});
        }
        if (e.target.name === 'origin') {
            setFormInput({...formInput, origin: e.target.value});
        }
        if (e.target.name === 'image') {
            setFormInput({...formInput, image: e.target.files[0]});
        }
        if (e.target.name === 'discount') {
            setFormInput({...formInput, discount: e.target.value});
        }

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', formInput?.image);
        form_data.append('name', formInput?.name);
        form_data.append('desc', formInput?.desc);
        form_data.append('quantity', formInput?.quantity);
        form_data.append('price', formInput?.price);
        form_data.append('coffee_type', formInput?.coffee_type);
        form_data.append('caffeine', formInput?.caffeine);
        form_data.append('creator', formInput?.creator);
        form_data.append('roasting_degree', formInput?.roasting_degree);
        form_data.append('origin', formInput?.origin);
        form_data.append('discount', formInput?.discount);

        try {
            const res = await axiosInstance.post('products/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            console.log(res.data);
            toast.success("Add origin");
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
                <h1 className="text-center">Add Product</h1>
                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault01"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Name</label>
                    <input value={formInput.name}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           onChange={handleInput}
                           name='name' type="text"

                           className="form-control"
                           id="validationDefault01"
                           required/>
                </div>
                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Description</label>
                    <textarea value={formInput.desc}
                              style={{
                                  backgroundColor: "var(--gray2)",
                                  borderColor: "var(--orange)",
                                  fontSize: "20px",
                                  color: "var(--orange)"
                              }}
                              name="Description"
                              onChange={handleInput}
                              rows="4"
                              className="form-control bi-textarea"
                              id="validationDefault02"
                              required/>
                </div>


                <div className="col-md-4 w-75">
                    <label htmlFor="price"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Price</label>
                    <input value={formInput.price}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="price"
                           onChange={handleInput}
                           type="number"
                           className="form-control"
                           id="price"
                           required/>
                </div>


                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Quantity</label>
                    <input onChange={handleInput}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="Quantity"
                           value={formInput.quantity}
                           type="number"
                           className="form-control"
                           id="validationDefault02"
                           required/>
                </div>

                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault099"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label mt-3">Image</label>
                    <input value={formInput.last_name}
                           style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                           name="image"
                           onChange={handleInput}
                           type="file"
                           className="form-control"
                           id="validationDefault099"
                           required/>
                </div>


                <div className="col-md-4 w-75">
                    <label htmlFor="coffee_type"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Coffee type</label>

                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}

                        value={formInput.coffee_type}
                        name="coffee_type"
                        id="coffee_type"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleInput}
                        required>
                        <option value="">chose from list</option>

                        {
                            coffeeTypes?.map((item) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>

                                );
                            })
                        }
                    </select>
                </div>

                <div className="col-md-4 w-75">
                    <label htmlFor="Caffeine"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Caffeine</label>

                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        onChange={handleInput}
                        value={formInput.caffeine}
                        className="form-select"
                        name="caffeine"
                        id="caffeine"
                        aria-label="Default select example"
                        required>
                        <option value="">chose from list</option>
                        {
                            caffeines?.map((item) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>
                                );
                            })
                        }
                    </select>
                </div>

                <div className="col-md-4 w-75">
                    <label htmlFor="creator"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Creator</label>

                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        value={formInput.creator}
                        className="form-select"
                        onChange={handleInput}
                        name="creator"
                        id="creator"
                        aria-label="Default select example"
                        required>
                        <option value="">chose from list</option>

                        {
                            creators?.map((item, index) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>

                                );
                            })
                        }
                    </select>
                </div>


                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Origin</label>

                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        value={formInput.origin}
                        className="form-select"
                        onChange={handleInput}
                        name="origin"
                        id="origin"
                        aria-label="Default select example"
                        required>
                        <option value="">chose from list</option>

                        {
                            origins?.map((item) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>

                                );
                            })
                        }
                    </select>
                </div>


                <div className="col-md-4 w-75">
                    <label htmlFor="roastingDegree"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Roasting degree</label>

                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        value={formInput.roasting_degree}
                        onChange={handleInput}
                        name="roastingDegree"
                        id="roastingDegree"
                        className="form-select"
                        aria-label="Default select example"
                        required>
                        <option value="">chose from list</option>

                        {
                            roastingDegrees?.map((item, index) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>

                                );
                            })
                        }
                    </select>
                </div>

                <div className="col-md-4 w-75">
                    <label htmlFor="discount"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Discount</label>
                    <select
                        style={{
                            backgroundColor: "var(--gray2)",
                            borderColor: "var(--orange)",
                            fontSize: "20px",
                            color: "var(--orange)"
                        }}
                        value={formInput.discount}
                        onChange={handleInput}
                        className="form-select"
                        name="discount"
                        id="discount"
                        aria-label="Default select example"
                        required>
                        <option value="">chose from list</option>
                        {
                            discounts?.map((item, index) => {
                                return (
                                    <option value={item?.id}>{item?.name}</option>
                                );
                            })
                        }
                    </select>
                </div>


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
                {isLoading && <Loader/>}
                <div className=" d-flex justify-content-around">
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-25"

                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Add
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
