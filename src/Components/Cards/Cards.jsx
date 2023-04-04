import React, { useState } from "react";
import Data from "./Json/CardsData.json";

export default function Cards({ setCardDatas, CardDas }) {
  const [Buttondata, setButtondata] = useState(Data.ButtonTitle);
  const [CardData, setCardData] = useState(Data.Card);

  function SearchActive() {
    document.getElementById("cardsearch").style.display = "block";
  }
  function SearchNoactive() {
    document.getElementById("cardsearch").style.display = "none";
  }
  let x = 0;
  function getValue(id) {
    for (let i = 0; i < Data.Card.length; i++) {
      if (i == id) {
        CardDas.push(Data.Card[id]);
      }
    }
    localStorage.setItem("Cards", JSON.stringify(CardDas));
  }

  return (
    <div className="Cards">
      <div className="Cards_row">
        <div className="Cards_row_col">
          <div className="Cards_row_col_bnt">
            {Buttondata.map((value, key) => (
              <button key={key}>{value.title}</button>
            ))}
          </div>

          <div className="Cards_row_col_mobali">
            <span className="Cards_row_col_mobali_btn">
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="33"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint0_linear_13_83)"
                />
                <rect
                  y="22.2857"
                  width="33"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint1_linear_13_83)"
                />
                <rect
                  x="9"
                  y="11.1429"
                  width="24"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint2_linear_13_83)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13_83"
                    x1="-8.62252e-09"
                    y1="3.46667"
                    x2="36.0395"
                    y2="3.46666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13_83"
                    x1="-3.90789"
                    y1="26"
                    x2="33"
                    y2="26"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_13_83"
                    x1="5.21062"
                    y1="13"
                    x2="33.0001"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <ul>
              {Buttondata.map((value, key) => (
                <li key={key}>
                  <button>{value.title}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Cards_row_col">
          <div className="Cards_row_col_search">
            <span onClick={SearchActive} onDoubleClick={SearchNoactive}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5693 26.4109L27.5691 26.4107L23.563 22.4129C25.6296 20.0774 26.886 17.0079 26.886 13.6507C26.886 6.35268 20.9501 0.416748 13.652 0.416748C6.35398 0.416748 0.416687 6.35264 0.416687 13.6507C0.416687 20.9488 6.35395 26.8861 13.652 26.8861C16.693 26.8861 19.498 25.8549 21.7349 24.1243L25.8027 28.1807L25.803 28.1811C26.0476 28.4239 26.3676 28.5457 26.6859 28.5457C27.0047 28.5457 27.3271 28.4244 27.5713 28.1772C28.0594 27.6884 28.057 26.8986 27.5693 26.4109ZM2.91669 13.6507C2.91669 7.73152 7.73272 2.91675 13.652 2.91675C19.57 2.91675 24.386 7.73151 24.386 13.6507C24.386 19.57 19.5699 24.3861 13.652 24.3861C7.73276 24.3861 2.91669 19.57 2.91669 13.6507Z"
                  fill="#F2F2F2"
                  stroke="#F2F2F2"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
            <input
              type="text"
              name="text"
              id="cardsearch"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div className="Cards_cards" id="Cards_cards">
        {CardData.map((value, key, index) => (
          <div key={key} className="Cards_cards_items">
            <img src={value.img} alt="" />
            <div className="Cards_cards_items_title">
              <h4>{value.CardTitle}</h4>
              <h6>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 20 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.92623 24.2108L0 18.3529L9.92017 32.3373L19.8515 18.3529L9.92017 24.2108H9.92623ZM10.0738 0L0.151576 16.4683L10.0738 22.3363L20 16.4743L10.0738 0Z"
                      fill="#FE8235"
                    />
                  </svg>
                </span>
                <p> o.452.46</p>
              </h6>
              <span>
                <img src={value.ellipseimg} alt="" />
                <p>{value.name}</p>
              </span>
              <div className="btn">
                <button onClick={() => getValue(key)}>$ {value.cum}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
