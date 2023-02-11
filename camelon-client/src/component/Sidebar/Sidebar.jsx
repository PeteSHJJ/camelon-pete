import React from 'react';
import logo from "../../assets/camelon-logo.png";
import './Sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faCircleInfo, faCircleQuestion  } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar-container">
        <div className='sidebar-header'>
            <img src={logo}></img>
            <h2> Camelon </h2>
        </div>
       
        <div className='sidebar-nav'>
            <a href='#'><FontAwesomeIcon icon={faHome} /> <div className='sidebar-nav-text'>Main Menu</div></a>
            <a href='#'><FontAwesomeIcon icon={faCircleInfo} /> <div className='sidebar-nav-text'>Emergency Information</div></a>
            <a href='#'><FontAwesomeIcon icon={faCircleQuestion} /> <div className='sidebar-nav-text'>About Camelon</div></a>
        </div>
    </div>
  )
}

export default Sidebar