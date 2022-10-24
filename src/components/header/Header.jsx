import "./header.css"
import me from "../../assets/me.jpeg"

import React from 'react'

const Header = () => {
  return (
    <div>
      <img id="profile__img" src={me} alt="profile pic" />
    </div>
  )
}

export default Header
