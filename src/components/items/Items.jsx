import "./items.css"
import React from 'react'
import slack from "../../assets/slack.svg"
import github from "../../assets/github.svg"


const Items = () => {
  return (
    <div className="items">
      <a href="https://www.twitter.com/ikechhi" target="_blank" className="item">Twitter Link</a>
      <a href="https://training.zuri.team/" target="_blank" id="btn__zuri" className="item">Zuri Team</a>
      <a href="https://books.zuri.team" id="books" target="_blank" className="item">Zuri Books
        <p>find amazing books about design and coding</p>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=elemaIK" id="book__python" target="_blank" className="item">Python Books
        <p>The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs. Get yours here now!</p>
      </a>
      <a href="https://background.zuri.team" id="pitch" target="_blank" className="item">Background Checks for Coders
        <p>Get top-notch background checks on coders</p>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" className="item">Design Books
        <p>Get this awesome, free design book by Zuri</p>
      </a>

      <div className="icons">
        <a href= "https://hng9.slack.com/team/U048AUGBW4T" target="_blank"> <img src={slack} alt="slack icon" /> </a>
        <a href="https://github.com/ElemaGp" target="_blank"> <img src={github} alt="github icon" /> </a>
      </div>
    </div>
  )
}

export default Items
