import "./items.css"
import React from 'react'
import slack from "../../assets/slack.svg"
import github from "../../assets/github.svg"


const Items = () => {
  return (
    <div className="items">
      <a href="https://www.twitter.com/ikechhi" target="_blank" className="item">Twitter Link</a>
      <a href="https://training.zuri.team/" target="_blank" id="btn__zuri" className="item">Zuri Team</a>
      <a href="https://books.zuri.team" title="find amazing books about design and coding" id="books" target="_blank" className="item">Zuri Books</a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=elemaIK" title="The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs. Get yours here now" id="book__python" target="_blank" className="item">Python Books</a>
      <a href="https://background.zuri.team" title="Get top-notch background checks on coders" id="pitch" target="_blank" className="item">Background Checks for Coders</a>
      <a href="https://books.zuri.team/design-rules" title="Get this awesome, free design book by Zuri" id="book__design" target="_blank" className="item">Design Books</a>
      <a href="/contact" id="contact" className="item">Contact Me</a>

      <div className="icons">
        <a href= "https://hng9.slack.com/team/U048AUGBW4T" target="_blank"> <img src={slack} alt="slack icon" /> </a>
        <a href="https://github.com/ElemaGp" target="_blank"> <img src={github} alt="github icon" /> </a>
      </div>
    </div>
  )
}

export default Items
