import "./TrackOrder.css";

export default function TrackOrder({ tracing,address,phone }) {

  const tracingDict = {
    "o":'Ordered',
    "s":'Shipped',
    "w":'On the way',
    "d":'Delivered',
  } 
  tracing = tracingDict[tracing]

  const steps = ["Ordered", "Shipped", "On the way", "Delivered"];

  return (
    <div>
      <div className="progress-track">
        <ul id="progressbar">
          {steps.map((step, index) => (
            <li
              key={`step${index + 1}`}
              className={`step${index} ${
                tracing === step ? "active" : ""
              } ${index < steps.indexOf(tracing) ? "active" : ""} pt-2 fs-6`}
            >
              {step}
            </li>
          ))}
        </ul>

      </div>

      
    </div>



  );
}
