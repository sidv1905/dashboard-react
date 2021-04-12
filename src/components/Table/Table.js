import React, { useState, useEffect, useContext } from "react";
import HeadingRow from "./HeadingRow";
import RowList from "./RowList";
import axios from "axios";
import { MyContext } from "../MyContext";
import Loader from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

export default function Table() {
  const [rowData, setrowData] = useState([]);
  const value = useContext(MyContext);
  const [leftStyle, setleftStyle] = useState(true);
  const [twoStyle, settwoStyle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFilter, setshowFilter] = useState(true);
  const [rerender, setrerender] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get("https://dashboard-api-19.herokuapp.com/cases/").then((res) => {
      setrowData(res.data);
      value.setData(res.data);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [value.modalClosed]);
  function addleftone() {
    setleftStyle(!leftStyle);
    settwoStyle(!twoStyle);
    handleReset();
  }
  function addlefttwo() {
    settwoStyle(!twoStyle);
    setleftStyle(!leftStyle);
    let newState = rowData.filter((item, index) => {
      return item["Status"] == "Closed";
    });
    setrowData(newState);
  }
  function handleSelect(e) {
    const { name, value } = e.target;

    let newState = rowData.filter((item, index) => {
      return item[name] == value;
    });

    setrowData(newState);
    toast("Filtered by " + name);
  }

  function handleReset() {
    setLoading(true);

    axios.get("https://dashboard-api-19.herokuapp.com/cases/").then((res) => {
      setrowData(res.data);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    toast.success("Data reset done");
  }

  function orderBy(value) {
    let newData;
    newData = rowData.sort((a, b) => (a[value] > b[value] ? 1 : -1));

    setrowData(newData);
    setrerender(!rerender);
    toast("Sorted by " + value);
  }
  if (!loading) {
    return (
      <section className="Table">
        <Toaster />
        <div className="table-nav">
          <div className="left">
            <div
              className={`left-one ${leftStyle ? "selected-nav" : ""}`}
              onClick={addleftone}
            >
              NEW/UNREAD CASES
            </div>
            <div
              className={`left-two ${twoStyle ? "selected-nav" : ""}`}
              onClick={addlefttwo}
            >
              OUTSTANDING AND CLOSED CASES
            </div>
          </div>
          <div className="right">
            <div
              className="right-one"
              onClick={() => {
                setshowFilter(!showFilter);
              }}
            >
              <p>Filter</p>
              <i className="fa fa-filter" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className={`filter-dropdown ${showFilter ? "none-display" : ""}`}>
          <select name="id" id="id" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="id" value={item.id} key={index}>
                  {item.id}
                </option>
              );
            })}
          </select>
          <select name="Branch" id="Branch" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Branch" value={item.Branch} key={index}>
                  {item.Branch}
                </option>
              );
            })}
          </select>
          <select name="Method" id="Method" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Method" value={item.Method} key={index}>
                  {item.Method}
                </option>
              );
            })}
          </select>
          <select name="Date" id="Date" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Date" value={item.Date} key={index}>
                  {item.Date}
                </option>
              );
            })}
          </select>
          <select name="Time" id="Time" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Time" value={item.Time} key={index}>
                  {item.Time}
                </option>
              );
            })}
          </select>
          <select name="SubCategory" id="SubCategory" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="SubCategory" value={item.SubCategory} key={index}>
                  {item.SubCategory}
                </option>
              );
            })}
          </select>
          <select name="Priority" id="Priority" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Priority" value={item.Priority} key={index}>
                  {item.Priority}
                </option>
              );
            })}
          </select>
          <select name="Nature" id="Nature" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Nature" value={item.Nature} key={index}>
                  {item.Nature}
                </option>
              );
            })}
          </select>
          <select name="Manager" id="Manager" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Manager" value={item.Manager} key={index}>
                  {item.Manager}
                </option>
              );
            })}
          </select>
          <select name="Reporter" id="Reporter" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Reporter" value={item.Reporter} key={index}>
                  {item.Reporter}
                </option>
              );
            })}
          </select>
          <select name="Status" id="Status" onChange={handleSelect}>
            {rowData.map((item, index) => {
              return (
                <option name="Status" value={item.Status} key={index}>
                  {item.Status}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className={` ${showFilter ? "none-display" : ""}`}
          id="btn-reset"
          onClick={handleReset}
        >
          Reset
        </button>

        <HeadingRow sorter={orderBy} />
        <RowList data={rowData} />
      </section>
    );
  } else {
    return (
      <div className="center">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
