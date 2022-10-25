import "./footer.css"
import React from 'react'
import zurilogo from "../../assets/zurilogo.svg"
import ingressivelogo from "../../assets/ingressivelogo.svg"

const Footer = () => {
  return (
    <footer className="footer">
        <img src={zurilogo} alt="zuri logo" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={ingressivelogo} alt="ingressive for good logo" />
        
    </footer>
  )
}

export default Footer