import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import React, { useState } from "react";
import About from "./Components/About";
import Alerts from "./Components/Alerts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark Mode has been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been Enabled", "Success");
    }
  };
  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Form
                title="Example Text Area"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
