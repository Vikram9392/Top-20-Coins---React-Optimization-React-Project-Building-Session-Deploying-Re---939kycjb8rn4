import React from "react";
import Link from "next/link";

function CoinCard(props) {
  const data = props.coin;
  return (
    <div className="coin-card">
      <h3 className="coin-name">{data.name}</h3>
      <h4 className="coin-symbol">{data.symbol}</h4>
      <p className="coin-rank">Rank: {data.rank}</p>
      <p className="coin-price">Price: ${data.price_usd}</p>
      <Link className="view-details-link" href={`/coins/${data.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default CoinCard;
