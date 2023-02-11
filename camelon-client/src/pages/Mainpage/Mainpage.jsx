import React from "react";
import "./Mainpage.scss";
import Sidebar from "../../component/Sidebar/Sidebar";
import Header from "../../component/Header/Header";
import MainContent from "../../component/MainContent/MainContent";
function Mainpage() {
  return (
    <div className="container">
      <aside><Sidebar /></aside>
      <header><Header /></header>
      <main><MainContent /></main>
      <footer></footer>
    </div>
  );
}

export default Mainpage;
