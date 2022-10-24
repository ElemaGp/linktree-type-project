import "./home.css"
import React from 'react'
import Header from "../../components/header/Header"
import Items from "../../components/items/Items"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <Header />
            <Items />
        </div>
        <Footer />
    </div>
  )
}

export default Home