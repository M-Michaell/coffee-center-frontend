import React, {useState} from "react";
import {CoffeeTypes} from "../../../apis/add_categories";
import {NavLink, useParams} from "react-router-dom";
import CoffeeTypeForm from "../../product_forms/CoffieType";
import CoffeeTypeEdit from "../../product_forms/CoffeeTypeEdit";
import {axiosInstance} from "../../../apis/config";
import {toast} from "react-toastify";


export default function CoffeeType() {

    const [show, setShow] = useState(1);
    const coffeeTypes = CoffeeTypes();

    const deleteItem = async (e, id)=>{
        e.preventDefault();
        try {
            const res = await axiosInstance.delete(`coffeeType/${id}/`);
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

    const submitAdd = (num) => {
        setShow(num);
    }

    return (
        show === 2? <CoffeeTypeForm submitAdd={submitAdd}/> : show === 3? <CoffeeTypeEdit submitAdd={submitAdd}/> :
            <div>
                <div className="d-flex justify-content-between">
                    <h1 className=""
                        style={{marginLeft:"100px"}}

                    >Coffee Type</h1>
                    <button className="btn border border-warning rounded-pill mb-5"
                            style={{marginRight:"266px"}}
                            onClick={()=>submitAdd(2)}>
                        add new item
                    </button>

                </div>

                <table className="table table-borderless ">
                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*    <th scope="col-2" style={{color: "var(--gray1)", fontSize:"20px"}} > <h1>Coffee Type</h1></th>*/}
                    {/*    <th scope="col-4" style={{color: "var(--gray1)", fontSize:"20px"}}> <button className="btn border border-warning rounded-pill mb-2">add new type</button></th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    <tbody>

                    {
                        coffeeTypes?.map((item, index) => {
                            return (

                                <tr key={item.id}>
                                    {/*<td style={{color: "var(--gray1)", fontSize:"20px"}}>{index+1}</td>*/}
                                    <td style={{color: "var(--gray1)", fontSize: "20px"}}>{item?.name}</td>
                                    <td>
                                        <NavLink
                                            to = {`/admin/coffeetypes/${item.name}/${item.id}/`}
                                            onClick={()=>{submitAdd(3)}}
                                            className="btn btn-outline-light custom-btn">
                                            Edit
                                        </NavLink>
                                        <button
                                             onClick={(event)=> deleteItem(event,item.id)}
                                            className="btn btn-outline-danger ms-5 custom-btn">
                                            Delete
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