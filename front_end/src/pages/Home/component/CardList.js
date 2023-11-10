import Card from "../../../general_components/Card/Card";
import {useState, useEffect} from "react";
import axios from "axios";
export default function CardList() {
    const [cards, setCard] = useState([]);
   useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/products/"
      )
      .then((res) =>{ console.log(res);setCard(res.data.list); console.log("moh",res.data.list)})
      .catch((err) => console.log(err));
  }, []);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{margin: "80px"}}>
            {
                cards.map((product, index)=>{
                    console.log("value of name outside crd", product.name)
                    return (<Card key={product.id} item={product}/>);
                })

            }
        </div>


    );
}