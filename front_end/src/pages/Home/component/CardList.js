import Card from "../../../general_components/Card/Card";

export default function CardList({cards}) {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{margin: "80px"}}>
            {
                cards?.map((product, index)=>{
                    console.log("value of name outside crd", product.name)
                    return (<Card key={product.id} item={product}/>);
                })

            }
        </div>


    );
}