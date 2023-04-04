import React, { useState } from 'react'
import Imegs_info from "../Banner/Json/BannerItem.json"
import BannerImg from '../Imegs/image_1.png'


export default function Banner() {
  const [data, setdata] = useState(Imegs_info.BannerItem)
  function modalActive() {
    document.getElementById("Modal").classList.add("Modal_Active")

  }

  return (
    <div className='Banner'>
      <div className="Banner_row">
        <div className="Banner_row_col">
          <h1>Discover <br /> THE World of NFT <br /> with NFT NEXUS</h1>
          <p>Unlock the Power of Digital Collectibles with <br /> Our Revolutionary Platform</p>


        </div>
        <div className="Banner_row_col">
          <div className="Banner_row_col_btn">
            <button id='Banner_login' onClick={modalActive}>LOGIN</button>
          </div>
        </div>

      </div>
      <div className="Banner_row">
        {
          data.map((value, key) => (
            <img key={key} src={value.img} alt="" />
          ))
        }
      </div>
      <img id='BannerImg' src={BannerImg} alt="" />


    </div>
  )
}
