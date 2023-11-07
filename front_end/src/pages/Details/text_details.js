import CollapsiblePanel from "./componants/collapse";
import MoreData from "./componants/data";
import DetailsImage from "./componants/image";

export default function TextDetails() {
  return (
      <div className="container vh-100 p-5 ">
        <div className="row">
          <div className="col-6">
            <div className="pb-5">
            <DetailsImage/>
            </div>
            
            <div className="panel-group text-start rounded-1 mt-5 " id="accordion" style={{'width':'500px','backgroundColor':'#2E2C2C'}}>
              <CollapsiblePanel
              collId={'Description'} 
              tab={'Description'}
              details={"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph."}
              title={"Pago repo"}
              />
              <CollapsiblePanel
              collId={'Reviews'}
              tab={'Reviews'}
              details={"veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat."}
              title={"title2"}
              />
              <CollapsiblePanel
              collId={'ShippingandPayment'}
              tab={'Shipping and Payment'}
              details={"veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat."}
              title={"title2"}
              />
            </div>
          </div>
          
          <div className="col-6">
            <MoreData />
          
          </div>
        </div>
      </div>
  );
}
