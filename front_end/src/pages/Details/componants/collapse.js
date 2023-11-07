import React, { useState } from "react";

export default function CollapsiblePanel({ collId,tab,details,title }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="" >
        <div className="panel panel-default">
          <div className="panel-heading ">
            <div className="panel-title mb-1 rounded-1 p-1 " style={{'backgroundColor':'#423F3F','position':'relative'}}>
              <a
                className="text-light text-decoration-none ps-2 d-block"
                style={{fontSize:'20px'}}
                data-bs-toggle="collapse"
                data-bs-parent="#accordion"
                href={`#${collId}`}
                
              >
                {tab} <i class="bi bi-caret-down-fill" style={{'position':'absolute','right':'10px'}}></i>
              </a>
            </div>
          </div>
          <div id={collId} className={`panel-collapse ${isOpen ? "in" : "collapse"} rounded-1 p-1` }>
            <div className="panel-body text-light ps-2">
                <h5 style={{fontSize:'22px'}}>{title}</h5>
              <p style={{fontSize:'14px'}}>
               {details}
              
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
