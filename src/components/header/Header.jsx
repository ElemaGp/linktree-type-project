import "./header.css"
import me from "../../assets/me.jpeg"
import shareicon from "../../assets/shareicon.svg"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img src={shareicon} alt="share icon" className="shareIcon" />
      <img id="profile__img" src={me} alt="profile pic" />
      <span id="twitter">@ikechhi</span>
      <span id="slack">G. I Elema</span>
    </div>
  )
}

export default Header
