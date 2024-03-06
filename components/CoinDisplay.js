import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay(props) {
  const coindata = props.coin;

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coindata.length>0 && coindata.slice(0,20).map((coin,i) => {
          
          return(<CoinCard coin={coin}/>)
        }
        )}
      </div>
    </div>
  );
}

export default CoinDisplay;
