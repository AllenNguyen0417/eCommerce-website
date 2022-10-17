import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Inventory } from "./components/Inventory";
import { Contact } from "./components/Contact";
import { History } from "./components/History";
import { Users } from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Navbar } from "./components/Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/users" element={<Users></Users>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/inventory" element={<Inventory></Inventory>}>
        <Route path="history" element={<History></History>}></Route>
      </Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
