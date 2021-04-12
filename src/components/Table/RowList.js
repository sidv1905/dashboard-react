import React, { useState } from "react";
import RowItem from "./RowItem";

export default function RowList({ data }) {
  return (
    <div className="row-container">
      {data.map((item, index) => {
        return <RowItem objectData={item} key={index} indice={index} />;
      })}
    </div>
  );
}
