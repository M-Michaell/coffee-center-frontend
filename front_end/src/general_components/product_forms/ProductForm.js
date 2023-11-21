import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {axiosInstance} from "../../apis/config";
import {useNavigate} from "react-router-dom";
import {register, reset} from "../../store/slices/auth";
import {toast} from 'react-toastify'
import Loader from "../../general_components/Loader/Loader";
import {CreatorsData, CaffeinesData, CoffeeTypes, RoastingDegrees, Origins} from "../../apis/add_categories";

export default function ProductForm() {
    const creators = CreatorsData();
    const caffeines = CaffeinesData();
    const coffeeTypes = CoffeeTypes();
    const roastingDegrees = RoastingDegrees();
    const origins = Origins();
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState(null);
    const [formInput, setFormInput] = useState({
        name: "",
        desc: "",
        quantity: "",
        price : '',
        coffee_type: "",
        caffeine: '',
        creator: '',
        roasting_degree: '',
        origin: '',
        discount: 'dis 1',
    });


    const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    };


    const handleInput = (e) => {
        if(e.target.name === 'name'){
            setFormInput({...formInput, name: e.target.value});
        }
        if(e.target.name === 'Description'){
            setFormInput({...formInput, desc: e.target.value});
        }
        if(e.target.name === 'Quantity'){
            setFormInput({...formInput, quantity: e.target.value});
        }
        if(e.target.name === 'price'){
            setFormInput({...formInput, price: e.target.value});
        }
        if(e.target.name === 'coffee_type'){
            setFormInput({...formInput, coffee_type: e.target.value});
        }
        if(e.target.name === 'caffeine'){
            setFormInput({...formInput, caffeine: e.target.value});
        }
        if(e.target.name === 'creator'){
            setFormInput({...formInput, creator: e.target.value});
        }
        if(e.target.name === 'roastingDegree'){
            setFormInput({...formInput, roasting_degree: e.target.value});
        }
         if(e.target.name === 'origin'){
            setFormInput({...formInput, origin: e.target.value});
        }

    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('image', selectedFile); // Verify the file is attached correctly

    for (const key in formInput) {
      formData.append(key, formInput[key]);
    }

    const response = await axiosInstance.post('products/', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    console.log('Product created:', response.data);
    // Handle success or do something with the response
  } catch (error) {
    if (error.response) {
      // Server responded with a non-2xx status code
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Request Error:', error.request);
    } else {
      // Something happened while setting up the request
      console.error('Error:', error.message);
    }
  }
};

    //  useEffect(() => {
    //     if (isError) {
    //         toast.error(message)
    //     }
    //     if (isSuccess) {
    //         navigate("/")
    //         toast.success("An activation email has been sent to your email. Please check your email")
    //     }
    //     dispatch(reset())
    // }, [isError, isSuccess, dispatch, message, navigate])


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
                    <textarea value={formInput.Description}
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
                           value={formInput.Quantity}
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
                              onChange={handleFileChange}
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
                        id = "coffee_type"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleInput}>
                    <option selected>Open this select menu</option>
                        {
                            coffeeTypes?.map((item)=>{
                                return(
                                     <option  value={item?.name}>{item?.name}</option>

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
                    <option selected>Open this select menu</option>
                        {
                            caffeines?.map((item)=>{
                                return(
                                     <option value={item?.name}>{item?.name}</option>
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
                        value={formInput.creators}
                        className="form-select"
                        onChange={handleInput}
                        name="creator"
                        id="creator"
                        aria-label="Default select example">
                    <option selected>Open this select menu</option>
                        {
                            creators?.map((item, index)=>{
                                return(
                                     <option value={item?.name}>{item?.name}</option>

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
                        value={formInput.origins}
                        className="form-select"
                        onChange={handleInput}
                        name="origin"
                        id="origin"
                        aria-label="Default select example">
                    <option value="">Open this select menu</option>
                        {
                            origins?.map((item, index)=>{
                                return(
                                     <option value={item?.name}>{item?.name}</option>

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
                        value={formInput.roastingDegrees}
                        onChange={handleInput}
                        name="roastingDegree"
                        id="roastingDegree"
                        className="form-select"
                        aria-label="Default select example">
                    <option selected>Open this select menu</option>
                        {
                            roastingDegrees?.map((item, index)=>{
                                return(
                                     <option value={item?.name}>{item?.name}</option>

                                );
                            })
                        }
                </select>
                </div>

                <div className="col-md-4 w-75">
                    <label htmlFor="validationDefault02"
                           style={{color: "var(--gray1)", fontSize: "18px"}}
                           className="form-label text-start mt-2">Discount</label>

                    <select
                        style={{
                               backgroundColor: "var(--gray2)",
                               borderColor: "var(--orange)",
                               fontSize: "20px",
                               color: "var(--orange)"
                           }}
                        className="form-select"
                        name="price"
                        aria-label="Default select example">
                    <option selected>Open this select menu</option>
                        {
                            creators?.map((item, index)=>{
                                return(
                                     <option value={item?.name}>{item?.name}</option>
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
                <div className="d-flex justify-content-center">
                    <button className="btn rounded-pill btn-block mb-4 mt-5 w-50"
                            style={{backgroundColor: " var(--orange) ", color: "var(--fff)", fontSize: "18px"}}
                            type="submit">Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
