import React from 'react'
import "./Rooms.css"
import Card from '../Card/Card'
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"

import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"


import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"


function Rooms() {
  return (
    <div id='Rooms'>
      <Card image1={room} image2={room1} image3={room2} title={"3BHK Villa in Vijayawada"} price={"20,000"}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"2BHK Modern Villa in Hyderbad"} price={"25,000"}/>
      <Card image1={hut3} image2={hut2} image3={hut1} title={"1BHK house in Goa"} price={"60,000"}/>
    </div>
  )
}

export default Rooms
