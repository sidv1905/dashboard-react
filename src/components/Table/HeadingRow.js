import React from "react";
import HeadingRowItem from "./HeadingRowItem";
export default function HeadingRow({ sorter }) {
  return (
    <div className="heading-row">
      <HeadingRowItem sorter={sorter} text={"CASE NO."} identifier={"id"} />
      <HeadingRowItem sorter={sorter} text={"BRANCH"} identifier={"Branch"} />
      <HeadingRowItem
        sorter={sorter}
        text={"REPORTING METHOD"}
        identifier={"Method"}
      />
      <HeadingRowItem sorter={sorter} text={"DATE"} identifier={"Date"} />
      <HeadingRowItem sorter={sorter} text={"TIME"} identifier={"Time"} />
      <HeadingRowItem
        sorter={sorter}
        text={"CATEGORY"}
        identifier={"Category"}
      />
      <HeadingRowItem
        sorter={sorter}
        text={"SUB CATEGORY"}
        identifier={"SubCategory"}
      />
      <HeadingRowItem
        sorter={sorter}
        text={"PRIORITY"}
        identifier={"Priority"}
      />
      <HeadingRowItem sorter={sorter} text={"NATURE"} identifier={"Nature"} />
      <HeadingRowItem
        sorter={sorter}
        text={"CASE MANAGER"}
        identifier={"Manager"}
      />
      <HeadingRowItem
        sorter={sorter}
        text={"CASE REPORTER"}
        identifier={"Reporter"}
      />
      <HeadingRowItem
        sorter={sorter}
        text={"CASE STATUS"}
        identifier={"Status"}
      />
    </div>
  );
}
