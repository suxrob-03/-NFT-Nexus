import React, { useState } from "react";

export default function Buy() {
  const [card] = useState(JSON.parse(localStorage.getItem("Cards")));

  return (
    <div className="Buy">
      <div className="Buy_title">
        <div className="Buy_title_box">
          <span>
            <h2>Summa</h2>: <h2>$ 400</h2>
          </span>
          <button>To'lov</button>
        </div>
      </div>

      <div className="Buy_cards">
        {card ? (
          card.map((value, key) => (
            <div key={key} className="Cards_cards_items" id={value.id}>
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
                <div className="Sum">
                  <p>${value.cum}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Hech narsa yo'q</h1>
          </div>
        )}
      </div>
    </div>
  );
}
