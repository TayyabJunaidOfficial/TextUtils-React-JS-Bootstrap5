import React from "react";

function Alerts(props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-warning alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alerts;
