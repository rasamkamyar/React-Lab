import React from "react";
import "./index.css";

function Brand(props) {
  let template = props.imageData.map((item, index) => {
    return (
      <img
        src={`/images/${item.imgSrc}`}
        className={`selectBox_image ${item.isSelected && "bordered_image"}`}
        key={item}
        onClick={() => {
          props.handleClick(index);
        }}
      />
    );
  });
  return <div className="selectBox">{template}</div>;
}

export default Brand;
