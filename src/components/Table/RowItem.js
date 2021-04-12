import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RowItem({ objectData, indice }) {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [Pcolor, setPcolor] = useState("red");
  const [Scolor, setScolor] = useState("red-i");
  useEffect(() => {
    colorChecker("Priority", objectData.Priority);
    colorChecker("Status", objectData.Status);
  }, []);
  /*let Pcolor = "",
    Scolor = "";
  if (objectData.Priority === "Low") {
    Pcolor = "yellow";
  } else if (objectData.Priority === "High") {
    Pcolor = "red";
  } else {
    Pcolor = "orange";
  }

  if (objectData.Status.toUpperCase() === "Not Prepared".toUpperCase()) {
    Scolor = "red-i";
  } else {
    Scolor = "yellow-i";
  }
  console.log(Pcolor);*/
  function colorChecker(name, value) {
    if (name == "Priority") {
      if (value == "High") {
        setPcolor("red");
      } else if (value == "Medium") {
        setPcolor("orange");
      } else {
        setPcolor("yellow");
      }
    } else if (name == "Status") {
      if (value.toUpperCase() === "Not Prepared".toUpperCase()) {
        setScolor("red-i");
      } else {
        setScolor("yellow-i");
      }
    }
  }
  function handleSelect(e) {
    //patch request to objectadata.id to server
    const { name, value } = e.target;
    colorChecker(name, value);

    axios
      .patch(`https://dashboard-api-19.herokuapp.com/cases/${objectData.id}`, {
        [name]: value,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={`row ${indice % 2 == 0 ? "odder" : ""}`}>
      <p>{objectData.id}</p>
      <p>{objectData.Branch}</p>
      <p>{objectData.Method}</p>
      <p>{objectData.Date}</p>
      <p>{objectData.Time}</p>

      <div className="grand-child">
        <select
          className="transparent"
          name="Category"
          id="Category"
          onChange={handleSelect}
        >
          <option name={objectData.Category}>{objectData.Category}</option>

          <option name="Grievance" value="Grievance">
            Grievance
          </option>
          <option name="Employment" value="Employment">
            Employment
          </option>
          <option name="Query" value="Query">
            Query
          </option>
          <option name="Complaints" value="Complaints">
            Complaints
          </option>
        </select>
      </div>
      <div className="grand-child">
        <select
          className="transparent"
          name="SubCategory"
          id="SubCategory"
          onChange={handleSelect}
        >
          <option name={objectData.SubCategory}>
            {objectData.SubCategory}
          </option>

          <option name="Complaints" value="Complaints">
            Complaints
          </option>

          <option name="Query" value="Query">
            Query
          </option>
        </select>
      </div>
      <div className="grand-child priority">
        <select
          className={Pcolor}
          name="Priority"
          id="Priority"
          onChange={handleSelect}
        >
          <option name={objectData.Priority}>{objectData.Priority}</option>

          <option name="High" value="High">
            High
          </option>
          <option name="Medium" value="Medium">
            Medium
          </option>
          <option name="Low" value="Low">
            Low
          </option>
        </select>
      </div>
      <div className="grand-child">
        <select
          className="transparent"
          name="Nature"
          id="Nature"
          onChange={handleSelect}
        >
          <option name={objectData.Nature}>{objectData.Nature}</option>

          <option name="Health" value="Health">
            Health
          </option>

          <option name="Transport" value="Transport">
            Transport
          </option>
          <option name="Property" value="Property">
            Property
          </option>
        </select>
      </div>
      <div className="grand-child">
        <select
          className="transparent"
          name="Manager"
          id="Manager"
          onChange={handleSelect}
        >
          <option name={objectData.Manager}>{objectData.Manager}</option>

          <option name="Daryl" value="Daryl">
            Daryl
          </option>

          <option name="Titus" value="Titus">
            Titus
          </option>
          <option name="Alfonzo" value="Alfonzo">
            Alfonzo
          </option>
          <option name="Benny" value="Benny">
            Benny
          </option>
        </select>
      </div>
      <p>{objectData.Reporter}</p>
      <div className="grand-child">
        <p>
          <i className={"fa fa-circle " + Scolor} aria-hidden="true"></i>
          {objectData.Status}
        </p>
      </div>
    </div>
  );
}
