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
    navigator.clipboard.writeText(text);
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
          <h1 htmlFor="textarea" className="mb-4 fs-2 ">
            {props.title}
          </h1>
          <textarea
            className="form-control"
            id="textarea"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="d-flex flex-sm-row flex-column gap-2">
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1"
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1"
            onClick={handleLoClick}
          >
            Convert To LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1"
            onClick={handleClrClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1"
            onClick={handleCopClick}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1"
            onClick={handleExtSpaces}
          >
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
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes To Read It</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div>
    </>
  );
}

export default Form;
