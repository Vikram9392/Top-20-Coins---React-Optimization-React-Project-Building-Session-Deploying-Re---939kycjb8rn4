import { useState, useEffect} from "react";
import { useRouter } from "next/router";

function CoinDetail() {
  const [coin, setCoin] = useState([]);
  const[loader, setLoader] = useState(true);
  const router = useRouter();
  const {coin_id} = router.query;
//  console.log("router.query ,",router.query);
  console.log("inside details page",coin_id);

  async function getCoinDetails()
  {
    const data = await fetch(`https://api.coinlore.net/api/ticker/?id=${coin_id}`);
    const res = await data.json();
    setCoin(res[0]);
  }
  useEffect(()=>{
    getCoinDetails();
    setLoader(false);
  },[]);
  return (
    loader==true?(<p>Loading...</p>):(<div className="coin-detail">
    <div className="name-symbol">
      <h1 className="name">{coin.name} </h1>
      <h2 className="symbol">{coin.symbol}</h2>
    </div>
    <div className="market-description">
      <p className="coin-rank">Rank: {coin.rank}</p>
      <p className="coin-price">Price: ${coin.price_usd}</p>
      <p className="coin-market-cap">Market Cap: ${coin.market_cap_usd}</p>
      <p className="coin-total-supply">Total Supply: {coin.tsupply}</p>
      <p className="coin-max-supply">Max Supply: {coin.msupply==""?"N/A":(coin.msupply)}</p>
    </div>
  </div>)
    
  );
}

export default CoinDetail;
