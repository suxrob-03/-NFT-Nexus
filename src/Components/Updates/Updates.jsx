import React from 'react'
import UpdatesImg from '../Imegs/image_8.png'

export default function Updates() {
  return (
    <div className='Updates'>
      <div className="Updates_row">
        <h2>Updates on upcoming events and <br /> activities related to NFTs</h2>
        <div className="Updates_row_input">
          <input type="text" name="text" id="text"  placeholder='your email'/>
          <button>submit</button>
        </div>

      </div>
      <div className="Updates_row">
        <img src={UpdatesImg} alt="" />
      </div>

    </div>
  )
}
