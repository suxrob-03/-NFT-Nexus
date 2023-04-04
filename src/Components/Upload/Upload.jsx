import React, { useState } from 'react'
import UpdateData from './Json/Upload.json'

export default function Upload() {
  const [data, setdata] = useState(UpdateData.Upload)
  return (
    <div className='Upload'>
      <div className="Upload_row_1">
        <h2>How to Upload Your Art as an <br /> NFT on NFT Nexus</h2>
        <p>Bring your artwork to life as a Non-Fungible Token on [Brand Name]. <br /> Our platform makes it easy for artists and collectors alike to upload <br /> and sell their unique digital creations. </p>
        <h6>Follow these simple steps to get started:</h6>
      </div>
      <div className="Upload_row_2">
        {
          data.map((value, key) => (
            <div key={key} className="Upload_row_2_items">
              <h6>Step {value.id}</h6>
              <div className="Upload_row_2_items_carsd">
                <span>
                  <svg width="51" height="62" viewBox="0 0 51 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.4508 0C28.8498 0 46.6848 6.123 49.0458 8.484C51.0138 10.452 50.9838 12.042 50.8458 19.662C50.7918 22.716 50.7168 26.877 50.7168 32.637C50.7168 53.283 27.1068 60.669 26.1018 60.972C25.8888 61.038 25.6698 61.068 25.4508 61.068C25.2318 61.068 25.0128 61.038 24.7998 60.972C23.7948 60.669 0.184808 53.283 0.184808 32.637C0.184808 26.886 0.109808 22.725 0.0558081 19.671C0.0311652 18.3087 0.00996627 17.1389 0.00299037 16.1252L0.00213623 14.9813C0.0278706 11.2234 0.380558 9.96 1.85881 8.484C4.21381 6.123 22.0488 0 25.4508 0ZM25.4508 4.5C22.9068 4.5 6.85681 10.152 5.00581 11.697C4.45981 12.246 4.43881 13.2 4.55581 19.587C4.60981 22.665 4.68481 26.847 4.68481 32.637C4.68481 48.24 21.8508 55.167 25.4478 56.442C29.0418 55.161 46.2168 48.195 46.2168 32.637C46.2168 26.841 46.2918 22.656 46.3488 19.578C46.4628 13.197 46.4418 12.243 45.8628 11.667C44.0478 10.152 27.9948 4.5 25.4508 4.5ZM36.6153 22.0185C37.4943 22.8975 37.4943 24.3225 36.6153 25.2015L24.9213 36.8985C24.5853 37.2369 24.1514 37.4563 23.6856 37.5305L23.3313 37.5585C22.7343 37.5585 22.1613 37.3215 21.7383 36.8985L16.0623 31.2165C15.1863 30.3375 15.1863 28.9095 16.0653 28.0335C16.9413 27.1545 18.3693 27.1545 19.2483 28.0335L23.3313 32.1225L33.4353 22.0185C34.3143 21.1395 35.7363 21.1395 36.6153 22.0185Z" fill="#FE8235" />
                  </svg>

                </span>
                <p>{value.pargirf}</p>
              </div>

            </div>

          ))
        }




      </div>

    </div>
  )
}
