import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import photo from './mm.png'
import FormControl from '@mui/material/FormControl';

export default function Card() {
    const [count, setCount] = React.useState(1);
    const [weight, setweight] = React.useState('');
    const handleChange = (event) => {
        setweight(event.target.value);
    };

    return (
        <div className="mt-4">
            <div className="card text-start position-relative" style={{color:"#FFFFFF", width: "270px", height: "400px", backgroundColor:"#232122",  marginTop:"100px"}}>
                <img src={photo} className="mt-5 position-absolute top-0 start-50 translate-middle" style={{height:"250px"}} alt="..." />
                <div className="card-body" style={{marginTop:"150px"}}>
                    <h5 className="card-title" style={{color:"#BD712B"}}>ROSSO & NERO</h5>
                    <p className="card-text" style={{fontSize:"13px" , height:"60px"}}>LINDT CREATION HASELNUSS DE LUXE FEINHERB TAFEL - 150G </p>
                    <div className="d-flex justify-content-between">
                        <FormControl sx={{ m: 1, minWidth: 120 ,backgroundColor:"#232122"}} size="small">
                        <InputLabel id="demo-select-small-label" sx={{backgroundColor:"#232122",color:"#FFFFFF"}}>weight</InputLabel>
                            <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={weight}
                            label="weight"
                            onChange={handleChange}
                            sx={{backgroundColor:"#232122"}}

                            >
                            <MenuItem value={10} sx={{backgroundColor:"#232122", color:"#FFFFFF", '&:hover': {backgroundColor: '#232122',}}}>100 g</MenuItem>
                            <MenuItem value={20} sx={{backgroundColor:"#232122", color:"#FFFFFF"}}>250 g</MenuItem>
                            <MenuItem value={30} sx={{backgroundColor:"#232122", color:"#FFFFFF"}}>1 kg</MenuItem>
                            </Select>
                        </FormControl>
                        <h3 style={{color:"#FFFFFF"}} className="mt-2">20$</h3>
                    </div>
                        <a  style={{ backgroundColor:"#BD712B", color:"#FFFFFF", fontSize:"18px"}} onClick={()=>{}} className="shadow  rounded-pill btn w-100">ADD TO Cart <i className="bi bi-cart3"></i></a>
                </div>
            </div>
        </div>
    );
}



































// const [invisible, setInvisible] = React.useState(false);
//     const [isCartVisible, setCartVisibility] = React.useState(true);
//     const StyledBadge = styled(Badge)(({ theme }) => ({'& .MuiBadge-badge': {
//       borderRadius: '50%',
//         height: "40px",
//         width: "40px",
//         backgroundColor:"#BD712B",
//         border: `2px solid ${theme.palette.background.paper}`,
//   },
// }));
//
//     return (
//         <div className="mt-4">
//
//
//                 <div className="card text-start position-relative" style={{color:"#FFFFFF", width: "270px", height: "400px", backgroundColor:"#494544",  marginTop:"100px"}}>
//                     <img src={photo} className="mt-5 position-absolute top-0 start-50 translate-middle" style={{height:"250px"}} alt="..." />
//                         <StyledBadge badgeContent={count} color="success"  invisible={!invisible}>
//
//                     <div className="card-body" style={{marginTop:"150px"}}>
//                         <h5 className="card-title" style={{color:"#BD712B"}}>ROSSO & NERO</h5>
//                         <p className="card-text" style={{fontSize:"13px"}}>LINDT CREATION HASELNUSS DE LUXE FEINHERB TAFEL - 150G</p>
//                         {
//                             isCartVisible ?
//                                 (
//                                     <div className="">
//                                     <h3 style={{color:"#FFFFFF"}}>price: 20$</h3>
//                                     <a  style={{ backgroundColor:"#BD712B"}} onClick={()=>{setInvisible(true); setCartVisibility(false); setCount(1)}} className="shadow  rounded-pill btn w-100">Cart<i className="bi bi-cart3"></i></a>
//                                     </div>
//                                 )
//                                 :
//                                 (
//                                     <div className="d-flex justify-content-around">
//                                         <a  onClick={()=>{setCount(Math.max(count - 1, 0)); count <= 1 ? setCartVisibility(true): setCartVisibility(false) }} className="btn shadow  rounded  " style={{height:"44px", width:"62px", backgroundColor:"#BD712B", fontSize:"20px"}}>-</a>
//                                         <h3>{20 * count}$</h3>
//                                         <a  onClick={()=>{setCount(count+1)}} className="btn shadow  rounded btn" style={{height:"44px", width:"62px", backgroundColor:"#BD712B", fontSize:"20px"}}>+</a>
//
//                                     </div>
//                                 )
//                         }
//
//                     </div>
//                 </StyledBadge>
//
//
//                 </div>
//         </div>
//     );
// }
