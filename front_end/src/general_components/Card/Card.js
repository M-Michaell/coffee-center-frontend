import React from 'react';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import photo from './mm.png'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart, decreaceQuantity, increaseQuantity, removeFromCart} from "../../store/slices/cart";

export default function Card({item}) {
    const disPatch = useDispatch();
    const [isHeartClicked, setHeartClicked] = useState(false);
    const [count, setCount] = useState(1);
    const [invisible, setInvisible] = useState(false);
    const [isCartVisible, setCartVisibility] = useState(true);
    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            borderRadius: '50%',
            height: "30px",
            width: "30px",
            backgroundColor: "var(--orange)",
            margin: '6px 6px',
            border: `2px solid ${theme.palette.background.paper}`,
        },
    }));

    const handleHeart = () => {
        setHeartClicked(!isHeartClicked);
    };


    return (
        <div className="mt-4">
            <div className="card text-start position-relative" style={{
                color: "var(--fff)",
                width: "270px",
                height: "400px",
                backgroundColor: "var(--gray2)",
                marginTop: "100px"
            }}>
                <img src={`http://127.0.0.1:8000${item?.image}`} className="mt-5 position-absolute top-0 start-50 translate-middle"
                     style={{height: "250px"}} alt="..."/>
                <StyledBadge badgeContent={count} color="success" invisible={!invisible}>
                    <div className="card-body " style={{marginTop: "150px"}}>
                        <button
                            className={`border border-0 m-2 bi position-absolute ${isHeartClicked ? "bi-heart-fill" : "bi-heart"} `}
                            style={{top: "0px", left: "0px", color: "var(--orange)", fontSize: "23px", backgroundColor:"var(--gray2)"}}
                            onClick={handleHeart}></button>
                        <h3 className="card-title" style={{color: "var(--orange)"}}>{item?.name}</h3>
                        <p className="card-text" style={{fontSize: "15px", height: "60px"}}>{item?.desc}</p>

                        {
                            isCartVisible ?
                                (
                                    <div className="d-flex justify-content-between mt-5 ">
                                        <h3 style={{color: "var(--fff)"}} className="mt-2">{item?.price}$</h3>

                                        <a style={{
                                            backgroundColor: "var(--orange)",
                                            color: "var(----fff)",
                                            fontSize: "18px",

                                        }}
                                           onClick={() => {
                                               disPatch(addToCart(item))
                                               setInvisible(true);
                                               setCartVisibility(false);
                                               setCount(1)
                                           }} className="shadow  rounded-pill btn ">Cart <i className="bi bi-cart3"></i></a>
                                    </div>
                                )
                                :
                                (
                                    <div className="d-flex justify-content-around mt-5">
                                        <a onClick={() => {
                                            disPatch(decreaceQuantity(item))
                                            setCount(Math.max(count - 1, 0));
                                            count <= 1 ? setCartVisibility(true) : setCartVisibility(false)
                                        }} className="btn shadow  rounded rounded-pill " style={{
                                            height: "44px",
                                            width: "62px",
                                            backgroundColor: "var(--orange)",
                                            fontSize: "20px",
                                            color: "var(--fff)"
                                        }}>-</a>
                                        <h3>{item?.price * count}$</h3>
                                        <a onClick={() => {
                                            disPatch(increaseQuantity(item))
                                            setCount(count + 1)
                                        }} className="btn shadow  rounded btn rounded-pill" style={{
                                            height: "44px",
                                            width: "62px",
                                            backgroundColor: "var(--orange)",
                                            fontSize: "20px",
                                            color: "var(--fff)"
                                        }}>+</a>
                                    </div>
                                )
                        }

                    </div>
                </StyledBadge>
            </div>
        </div>
    );
}
