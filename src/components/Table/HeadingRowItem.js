import React from "react";

export default function HeadingRowItem({ text, sorter, identifier }) {
  function handleClick() {
    sorter(identifier);
  }

  return (
    <div className="heading-row-element" onClick={handleClick}>
      <p>{text}</p>
      <i className="fa fa-chevron-down" aria-hidden="true"></i>
    </div>
  );
}
