import Card from "../../../general_components/Card/Card";

export default function CardList() {
    const cards = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
];
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{margin: "80px"}}>
            {
                cards.map((card)=>{
                    return(<Card/>)
                })
            }
        </div>
    );
}