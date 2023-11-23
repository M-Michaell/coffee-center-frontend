import { useParams } from "react-router-dom";
import CartItems from "../Cart/component/CartItems";
import CardSlider from "../Home/component/CardSlider";
import CollapsiblePanel from "./componants/collapse";
import MoreData from "./componants/data";
import DetailsImage from "./componants/image";
import Suggestions from "./componants/suggestions";
import { ProductDetails } from "../../apis/product_details/get_details";

export default function TextDetails() {
  const { id } = useParams();
  const { product } = ProductDetails(id);

  return (
    <div>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col col-xl-6 d-flex flex-column align-items-center mb-4">
            <DetailsImage image={product.image} />

            <div
              className="panel-group text-start rounded-1 mt-5 "
              id="accordion"
              style={{ width: "500px", backgroundColor: "#2E2C2C" }}
            >
              <CollapsiblePanel
                collId={"Description"}
                tab={"Description"}
                details={product.desc}
                title={""}
              />
            
              <CollapsiblePanel
                collId={"ShippingandPayment"}
                tab={"Shipping"}
                details={
                  "free from our shop or +50 EGP shipping to your place "
                }
                title={""}
              />




            </div>
          </div>

          <div className="col col-xl-6  d-flex justify-content-center">
            <MoreData product={product} />
          </div>
        </div>
      </div>

      <div className="mb-5 pb-5">
        <Suggestions />
      </div>
    </div>
  );
}
