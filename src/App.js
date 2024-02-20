import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Translate from "./components/translator/Translate";


function App() {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/problems" element={<Translate />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
