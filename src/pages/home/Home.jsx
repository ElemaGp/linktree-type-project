import "./home.css"
import React from 'react'
import Header from "../../components/header/Header"
import Items from "../../components/items/Items"

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <Header />
            <Items />
        </div>
    </div>
  )
}

export default Home