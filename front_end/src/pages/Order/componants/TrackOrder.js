import "./TrackOrder.css";

export default function TrackOrder() {
  return (
    <div className="progress-track">
      <ul id="progressbar">
        <li className="step0 active " id="step1">
          Ordered
        </li>
        <li className="step0 active text-center" id="step2">
          Shipped
        </li>
        <li className="step0 active text-right" id="step3">
          On the way
        </li>
        <li className="step0 text-right orange" id="step4">
          Delivered
        </li>
      </ul>
    </div>
  );
}
