import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted To UpperCases", "Success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted To LowerCases", "Success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Cleared Text", "Success");
  };
  const handleCopClick = () => {
    var text = document.getElementById("textarea", "Success");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied To Clipboard", "Success");
  };
  const handleExtSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Removed Extra Spaces", "Success");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1 htmlFor="textarea" className="fs-3">
            {props.title}
          </h1>
          <textarea
            className="form-control"
            id="textarea"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="d-flex flex-sm-row flex-column gap-2">
          <button className="btn btn-danger mx-1" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-danger mx-1" onClick={handleLoClick}>
            Convert To LowerCase
          </button>
          <button className="btn btn-danger mx-1" onClick={handleClrClick}>
            Clear Text
          </button>
          <button className="btn btn-danger mx-1" onClick={handleCopClick}>
            Copy Text
          </button>
          <button className="btn btn-danger mx-1" onClick={handleExtSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes To Read It</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview it here"}</p>
      </div>
    </>
  );
}

export default Form;
