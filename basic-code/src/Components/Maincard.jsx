import React from 'react'
import Card from './Card'
import './Maincard.css'

import First from "../assets/4th.png"
import Second from "../assets/5th.png"
import Third from "../assets/4th.png"
// import img1 from "../assets/Art-image2.jpg"
// import img2 from "../assets/Artimage1.jpg"
// import img3 from "../assets/Art-image3.jpg"
// import img4 from "../assets/First.jpeg"
// import img5 from "../assets/First.jpeg"
// import img from "../assets/First.jpeg"

function Maincard() {
  return (
    <div className='root'>
      <Card Img={First} Description="How to make GUI in Java with example" comment="4"/>
      <Card Img={Second} Description="Make animated light mode and dark mode toggle with CSS"  comment="6"/>
      <Card Img={Third} Description="How to make GUI in Java with example"  comment="3"/>
      <Card Img={First} Description="How to make GUI in Java with example"  comment="6"/>
      <Card Img={Second} Description="Make animated light mode and dark mode toggle with CSS"  comment="13"/>
      <Card Img={Third} Description="How to make GUI in Java with example"  comment="7"/>
      <Card Img={First} Description="How to make GUI in Java with example"  comment="10"/>
      <Card Img={Second} Description="Make animated light mode and dark mode toggle with CSS"  comment="15"/>
      <Card Img={Third} Description="How to make GUI in Java with example"  comment="8"/>
      
     

    </div>
  )
}

export default Maincard
