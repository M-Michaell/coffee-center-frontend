import MyCheckBox from "./checkbox";
import Map from "./map";
import Rate from "./rate";
import Row from "./row";

export default function MoreData() {
  return (
    <div className="text-start text-light">
      <div className="d-flex flex-row justify-content-between">
        <div className="mb-4">
          <h2 className="mb-0" style={{'color':'#BD712B'}}>PERU EL PALTO ESPRESSO </h2>
          <span className="pt-0 text-secondary" style={{fontSize:'12px'}}>caffe Francin</span>
        </div>
        <div>
            <Rate />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-start ">
        <MyCheckBox name={"100g"} />
        <MyCheckBox name={"250g"} />
        <MyCheckBox name={"1kg"} />
      </div>
      <div className="mt-4 mb-3">
        <span className="text-secondary text-decoration-line-through me-4" style={{'fontSize':'12px'}}>186EGP</span><span style={{fontWeight:'bolder'}}>126EGP</span>
      </div>
      <div>
        <button className="btn" style={{backgroundColor:'#BD712B',color:'white',borderRadius:'20px',width:'150px'}}>Buy Now</button>
      </div>
      <div>
        <table className="w-100 mt-5">
            <Row x={'Roasting Stage'} y={'Average'}/>
            <Row x={'corriposation'} y={'80% Arabical 20% Robusta'}/>
            <Row x={'Taste'} y={'Beautiful cream caramel havor with hints of molasses'}/>
            <Row x={'Great For'} y={'Espesso'}/>
            
        </table>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}
