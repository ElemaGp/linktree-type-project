import "./header.css"
import me from "../../assets/me.jpeg"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img id="profile__img" src={me} alt="profile pic" />
      <span>@ikechhi</span>
      <span className="slackName">G. I Elema</span>
    </div>
  )
}

export default Header
