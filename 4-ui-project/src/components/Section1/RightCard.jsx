import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-60 rounded-4xl overflow-hidden relative">
      <img
        className="object-cover h-full w-full  "
        src={props.img}
        alt=""
      />
        <RightCardContent idx={props.idx} tag={props.tag} text={props.text} color={props.color} />
    </div>
  );
};

export default RightCard;
