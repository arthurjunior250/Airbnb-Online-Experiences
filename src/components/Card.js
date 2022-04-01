import React from "react";


export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.item.coverImg}
        alt="swimmer"
        className="card--photo"
      />
      <div>
        <div className="card--text">
          <div className="card--rating">
            <img
              src="/images/redstar.png"
              alt="redstar"
              className="card--red-star"
            />
            <p>{props.item.stats.rating}</p>
            <p>({props.item.stats.reviewCount})</p>
            <p> • </p>
            <p>{props.item.location}</p>
          </div>
          <p>{props.item.title}</p>
          <p>
            <b>${props.item.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
