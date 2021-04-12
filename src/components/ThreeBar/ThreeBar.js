import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "../MyContext";
import { CSVLink, CSVDownload } from "react-csv";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-30%",

    transform: "translate(-50%, -50%)",
    borderRadius: "10%",
  },
};

Modal.setAppElement("#root");

export default function ThreeBar() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const value = useContext(MyContext);

  const [formstate, setformstate] = useState({
    Branch: "",
    Method: "",
    Date: "",
    Time: "",
    Category: "",
    SubCategory: "",
    Priority: "",
    Nature: "",
    Manager: "",
    Reporter: "",
    Status: "",
  });

  function openModal() {
    setIsOpen(true);
    console.log(value.modalClosed, "in modal");
  }

  function closeModal() {
    setIsOpen(false);
    value.setmodalClosed(!value.modalClosed);
  }

  /*
  {
  "Branch": "string",
  "Method": "string",
  "Date": "2021-04-12",
  "Time": "string",
  "Category": "string",
  "SubCategory": "string",
  "Priority": "string",
  "Nature": "string",
  "Manager": "string",
  "Reporter": "string",
  "Status": "string"
}
  */

  function handleChange(e) {
    const { name, value } = e.target;

    setformstate({ ...formstate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://dashboard-api-19.herokuapp.com/cases/", formstate)
      .then((res) => {
        toast.success("Submit successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Submit Unsuccesful");
      });
    //post request
  }
  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="modal">CASE UPLOAD</h2>
        <p className="modal">Fill the form and submit to add data</p>

        <form>
          <div>
            <label>
              Branch:
              <input
                name="Branch"
                type="text"
                value={formstate.Branch}
                onChange={handleChange}
              />
            </label>
            <label>
              Method:
              <input
                name="Method"
                type="text"
                value={formstate.Method}
                onChange={handleChange}
              />
            </label>
            <label for="birthday">Date:</label>
            <input
              type="date"
              id="date"
              value={formstate.Date}
              name="Date"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>
              Time:
              <input
                name="Time"
                type="time"
                value={formstate.Time}
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <input
                name="Category"
                type="text"
                value={formstate.Category}
                onChange={handleChange}
              />
            </label>
            <label>
              SubCategory:
              <input
                name="SubCategory"
                type="text"
                value={formstate.SubCategory}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Priority:
              <input
                name="Priority"
                type="text"
                value={formstate.Priority}
                onChange={handleChange}
              />
            </label>
            <label>
              Nature:
              <input
                name="Nature"
                type="text"
                value={formstate.Nature}
                onChange={handleChange}
              />
            </label>
            <label>
              Manager:
              <input
                name="Manager"
                type="text"
                value={formstate.Manager}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Reporter:
              <input
                name="Reporter"
                type="text"
                value={formstate.Reporter}
                onChange={handleChange}
              />
            </label>

            <label>
              Status:
              <input
                name="Status"
                type="text"
                value={formstate.Status}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Submit"
            id="submit"
          />
          <button id="close" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
      <section className="ThreeBar">
        <div className="bar-box box-one">
          <div className="box-icon">
            <i className="fa fa-file" aria-hidden="true"></i>
          </div>
          <button onClick={openModal}>Case upload</button>
        </div>

        <div className="bar-box box-two">
          <div className="box-icon">
            <i className="fa fa-file" aria-hidden="true"></i>
          </div>
          <button>
            <CSVLink className="box-two-gen" data={value.data}>
              Generate Report
            </CSVLink>
          </button>
        </div>
        <div className="bar-box box-three">
          <div className="box-icon">
            <i className="fa fa-envelope-open" aria-hidden="true"></i>
          </div>

          <a href="mailto:demo@demo.com">Broadcast Message</a>
        </div>
      </section>
    </React.Fragment>
  );
}
