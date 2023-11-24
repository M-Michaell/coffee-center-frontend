import { useEffect, useState } from "react";
import Card from "../../../general_components/Card/Card";
import Samilar from "../../../apis/product_details/get_samilar";
export default function Suggestions(props) {
  const { product } = props;

  const [samilars, setSamilars] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Samilar(product);
      window.scrollTo({
        top: 0,
        behavior:"auto",
      });
      setSamilars(data);
    };
    fetchData();
  }, [product]);

  return (
    <>
      <div className="mt-3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="text-start" style={{ color: "var(--orange)" }}>
          Similar Products{" "}
        </h2>
        <div className="col col-sm col-md-9 col-xl-10 mb-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 justify-content-center align-items-center w-100 h-100">
            {samilars?.length > 0 ? (
              samilars.map((product, index) => (
                <div>
                  <div
                    className="col d-flex justify-content-center"
                    key={product+index}
                  >
                    <Card item={product} />
                  </div>
                </div>
              ))
            ) : (
              <p className="fs-5 orange ">
                We apologize, but it seems we couldn't find any items matching
                this product.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
