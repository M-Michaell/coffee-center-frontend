import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import photo from './mm.png'

export default function Card() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const [isCartVisible, setCartVisibility] = React.useState(true);
    const StyledBadge = styled(Badge)(({ theme }) => ({'& .MuiBadge-badge': {
      borderRadius: '50%',
        height: "40px",
        width: "40px",
        backgroundColor:"#BD712B",
        border: `2px solid ${theme.palette.background.paper}`,
  },
}));

    return (
        <div className="mt-4">


                <div className="card text-start position-relative mt-5" style={{color:"#FFFFFF", width: "270px", height: "400px", backgroundColor:"#494544"}}>
                    <img src={photo} className="mt-5 position-absolute top-0 start-50 translate-middle" style={{height:"250px"}} alt="..." />
                        <StyledBadge badgeContent={count} color="success"  invisible={!invisible}>

                    <div className="card-body" style={{marginTop:"200px"}}>
                        <h5 className="card-title" style={{color:"#BD712B"}}>ROSSO & NERO</h5>
                        <p className="card-text" style={{fontSize:"13px"}}>LINDT CREATION HASELNUSS DE LUXE FEINHERB TAFEL - 150G</p>
                        {
                            isCartVisible ?
                                (
                                    <div className="">
                                    <h3 style={{color:"#FFFFFF"}}>price: 20$</h3>
                                    <a href="#" style={{ backgroundColor:"#BD712B"}} onClick={()=>{setInvisible(true); setCartVisibility(false); setCount(1)}} className="shadow  rounded-pill btn w-100">Cart<i className="bi bi-cart3"></i></a>
                                    </div>
                                )
                                :
                                (
                                    <div className="d-flex justify-content-around">
                                        <a href="#" onClick={()=>{setCount(Math.max(count - 1, 0)); count <= 1 ? setCartVisibility(true): setCartVisibility(false) }} className="btn shadow  rounded  " style={{height:"44px", width:"62px", backgroundColor:"#BD712B", fontSize:"20px"}}>-</a>
                                        <h3>{20 * count}$</h3>
                                        <a href="#" onClick={()=>{setCount(count+1)}} className="btn shadow  rounded btn" style={{height:"44px", width:"62px", backgroundColor:"#BD712B", fontSize:"20px"}}>+</a>

                                    </div>
                                )
                        }

                    </div>
                </StyledBadge>


                </div>
        </div>
    );
}