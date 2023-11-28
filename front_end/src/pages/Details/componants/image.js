import Toggle from "../../../general_components/Card/toggle";

export default function DetailsImage({ image, item }) {

  return (
    <div className="p-auto position-relative" style={{ width: "500px" }}>
      <img src={`http://127.0.0.1:8000${image}`} alt="" />
      <div
        className=" position-absolute fs-2"
        style={{
          top: "0px",
          right: "0px",
        }}
      >
        <Toggle item={item} />
      </div>
    </div>
  );
}
