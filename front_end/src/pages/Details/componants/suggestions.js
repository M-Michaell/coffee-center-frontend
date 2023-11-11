import Card from "../../../general_components/Card/Card"
export default function Suggestions() {

    return(
        <>
            
            <center>
            <h2 className="text-start" style={{'color':'#BD712B',marginLeft:'280px'}}>Similar Products </h2>

                <div className="d-flex flex-row justify-content-around w-75">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                </div>
            </center>
        </>
    )
}