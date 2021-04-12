import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import ThreeBar from "./components/ThreeBar/ThreeBar";
import Table from "./components/Table/Table";
import { MyContext } from "./components/MyContext";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Joyride from "react-joyride";

function App() {
  const steps = [
    {
      target: ".box-one",
      content:
        "Click here to add Case to the Database ! click and enter the given details and submit to add row to the table",
    },
    {
      target: ".box-two",
      content: "Generates a csv file of table given below,Click to download",
    },
    {
      target: ".box-three",
      content: "Opens email client",
    },
    {
      target: ".Table",
      content:
        "This is whole data, You can filter, sort and do things accordingly",
    },
    {
      target: ".heading-row",
      content: "Sort by clicking on the element which you want to sort!",
    },
  ];
  const [data, setData] = useState("idk");
  const [modalClosed, setmodalClosed] = useState(false);
  const [showNav, setshowNav] = useState(true);

  useEffect(() => {
    toast(
      "Welcome, This Submission is by Siddharh Varangaonkar ! Contact: 9131581148",
      {
        duration: 6000,
        icon: "👏",
      }
    );
  }, []);
  return (
    <MyContext.Provider
      value={{
        showNav,
        setshowNav,
        data,
        setData,
        modalClosed,
        setmodalClosed,
      }}
    >
      <div className="App">
        <Toaster />
        <ThreeBar />
        <Header />
        <SideBar />
        <Table />
        <Joyride steps={steps} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
