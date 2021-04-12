import React, { useState, useContext } from "react";
import { MyContext } from "../MyContext";

export default function Header() {
  const value = useContext(MyContext);

  function navClick() {
    value.setshowNav(!value.showNav);
  }
  return (
    <section className="Header">
      <div className="nav-left">
        <div className="burger-icon" onClick={navClick}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="nav-logo">SHAHI</div>
      </div>
      <div className="nav-right">
        <i className="fa fa-cog" aria-hidden="true"></i>

        <img src="https://picsum.photos/50" />
      </div>
    </section>
  );
}
