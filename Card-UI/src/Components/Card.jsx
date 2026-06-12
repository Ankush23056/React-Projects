import React from "react";
import { ArrowRight } from "lucide-react";

const Card = (props) => {
  return (
    <div className="child">
      <div className="main" style={{background:props.color}}>
        <div className="top">
          <h1>{props.title}</h1>
        </div>
        <div className="middle">
          <h3>{props.des}</h3>
        </div>
        <div className="bottom">
          <span className="tags" style={{background: props.tagcolor}}>
            {props.t1 }
          </span>
          <span className="tags" style={{background: props.tagcolor}}>
            {props.t2}
          </span>
          <span className="tags" style={{background: props.tagcolor}}>
            {props.t3}
          </span>
          <span className="tags" style={{background: props.tagcolor}}>
            {props.t4}
          </span>
        </div>
      </div>
      <div className="footer">
        <h3>Explore</h3>
        <span>
          <ArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Card;
