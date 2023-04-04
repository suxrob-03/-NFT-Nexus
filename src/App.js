import React, { useState } from "react";
import "./Sass/style.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("User"));
  const [CardDas, setCardDatas] = useState([]);
  return (
    <div className="App">
      <Modal setUser={setUser} />
      <Header user={user} CardDas={CardDas} setCardDatas={setCardDatas} />
      <Outlet CardDas={CardDas} setCardDatas={setCardDatas} />
      <Footer />
    </div>
  );
}

export default App;
