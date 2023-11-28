import DetailsImage from "./componants/image";
import Suggestions from "./componants/suggestions";
import { ProductDetails } from "../../apis/product_details/get_details";
import { useEffect, useState } from "react";
import Loader from "../../general_components/Loader/Loader";
import MoreData from "./componants/data";
import CollapsiblePanel from "./componants/collapse";
import { useParams } from "react-router-dom";

export default function TextDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductDetails(id);
      setProduct(data);

    };
    fetchData();
  }, [id]);

  return (
    <>
      {product ? (
        <div>
          <div className="container pt-5 ">
            <div className="row">
              <div className="col col-xl-6 d-flex flex-column align-items-center mb-4">
                {product.image && <DetailsImage image={product.image} item={product}/>}

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
            <Suggestions product={product} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
