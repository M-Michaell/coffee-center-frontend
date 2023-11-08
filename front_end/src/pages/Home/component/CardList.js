import Card from "../../../general_components/Card/Card";

export default function CardList() {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{margin: "80px"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}