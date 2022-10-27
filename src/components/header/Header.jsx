import "./header.css"
import me from "../../assets/me.jpeg"
import shareicon from "../../assets/shareicon.svg"
import more from "../../assets/more.svg"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img src={shareicon} alt="share icon" className="shareIcon" />
      <img src={more} alt="more icon" className="moreIcon" />
      <img id="profile__img" src={me} alt="profile pic" />
      <span id="twitter">@ikechhi</span>
      <span id="slack">Elema Godspower Ikechukwu</span>
    </div>
  )
}

export default Header
