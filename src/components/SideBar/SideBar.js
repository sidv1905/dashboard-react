import React, { useState, useContext } from "react";
import { MyContext } from "../MyContext";
import toast, { Toaster } from "react-hot-toast";

export default function SideBar() {
  const value = useContext(MyContext);

  function handleText(text) {
    toast(text, {
      icon: "👏",
    });
  }
  return (
    <section className={`SideBar ${value.showNav ? "active-sidebar" : ""}`}>
      <div className="home-item sidebar-item">
        <i className="fa fa-home" aria-hidden="true"></i>
      </div>

      <div
        className="menu-item sidebar-item"
        onClick={() => handleText("Menu is not available")}
      >
        <i className="fa fa-th-large" aria-hidden="true"></i>
      </div>
      <div
        className="report-item sidebar-item"
        onClick={() =>
          handleText("Report can be generated by clicking on the second box")
        }
      >
        <i className="fa fa-file" aria-hidden="true"></i>
      </div>
      <div
        className="bell-item sidebar-item"
        onClick={() => handleText("I am the notification")}
      >
        <i className="fa fa-bell" aria-hidden="true"></i>
      </div>
      <div
        className="question-item sidebar-item"
        onClick={() =>
          handleText(
            "Question? Feel free to drop a mail at sidvarangaonkar1905@gmail.com"
          )
        }
      >
        <i className="fa fa-question" aria-hidden="true"></i>
      </div>
    </section>
  );
}
