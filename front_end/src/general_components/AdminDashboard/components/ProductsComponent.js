import React, {useState} from "react";
import {Products} from "../../../apis/add_categories";
import {NavLink, useParams} from "react-router-dom";
import ProductForm from "../../product_forms/ProductForm";
import ProductEdit from "../../product_forms/ProductEdit";
import {axiosInstance} from "../../../apis/config";
import {toast} from "react-toastify";


export default function Product() {

    const [show, setShow] = useState(1);
    const [item , setItem] = useState();
    const coffeeTypes = Products();

    const deleteItem = async (e, id)=>{
        e.preventDefault();
        try {
            const res = await axiosInstance.delete(`product/${id}/`);
            toast.success("deleted Sucessfully");
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

    }

    const restoreItem = async (e, id)=>{
        e.preventDefault();
        try {
            const res = await axiosInstance.patch(`product/${id}/`, {"deleted": 0});
            toast.success("restored Sucessfully");
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

    }

    const submitAdd = (num) => {
        setShow(num);

    }

    return (
        show === 2? <ProductForm submitAdd={submitAdd}/> : show === 3? <ProductEdit submitAdd={submitAdd} item={item}/> :
            <div>
                <div className="d-flex justify-content-between">
                    <h1 className=""
                        style={{marginLeft:"100px",color: "var(--fff)" }}

                    >Product</h1>
                    <button className="btn border border-warning rounded-pill mb-5"
                            style={{marginRight:"266px"}}
                            onClick={()=>submitAdd(2)}>
                        add new item
                    </button>

                </div>

                <table className="table table-borderless ">

                    <tbody>
                    {
                        coffeeTypes?.map((item, index) => {
                            console.log("photo",item.image)
                            return (
                                <tr key={item.id}>
                                    {/*<td style={{color: "var(--gray1)", fontSize:"20px"}}>{index+1}</td>*/}
                                    <td className={`${item.deleted ? "text-decoration-line-through" : ""}`}
                                        style={{color: "var(--gray1)", fontSize: "20px"}}>{item?.name}</td>
                                    <td>
                                        <NavLink
                                            to = {`/admin/product/`}
                                            onClick={()=>{submitAdd(3); setItem(item)}}
                                            className={`btn btn-outline-light custom-btn ${item.deleted ? "text-decoration-line-through disabled" : ""}`}>
                                            Edit
                                        </NavLink>
                                        <button
                                             onClick={(event)=> deleteItem(event,item.id)}
                                            className={`btn btn-outline-danger ms-5 custom-btn ${item.deleted ? "text-decoration-line-through disabled" : ""}`}>
                                            Delete
                                        </button>
                                        <button
                                             onClick={(event)=> restoreItem(event,item.id)}
                                            className={`btn btn-outline-success ms-5 custom-btn ${item.deleted ? "" : "text-decoration-line-through disabled"}`}>
                                            Restore
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
    )
}