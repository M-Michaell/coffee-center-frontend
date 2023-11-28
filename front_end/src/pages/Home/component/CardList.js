import Card from "../../../general_components/Card/Card";

export default function CardList({cards}) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 justify-content-center" style={{margin: "80px"}}>
            {
                cards?.map((product, index)=>{

                    return (<div className="col " key={index}>
                            {
                                <Card key={product.id} item={product}/>

                            }


                    </div>
                    );
                })

            }
        </div>


    );
}