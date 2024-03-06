import CoinDisplay from "../components/CoinDisplay";
import React, { useState, useEffect } from "react";
export default function Home() {
  const [coins, setCoins] = useState([]);
  async function getcoins(){
    
    let data = await fetch("https://api.coinlore.net/api/tickers/");
    let res = await data.json();
    setCoins(res.data);
  }
  useEffect(()=>{
    getcoins();
  },[]);
  return <CoinDisplay coin={coins}/>;
}
