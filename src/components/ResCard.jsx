import React from "react";
import "./ResCard.css";
const ResCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
    props.resData.info;
  return (
    <div className="rescard">
      <div className="rescard-img-section">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="res-image"
          className="res-img"
        />
      </div>
      <div className="rescard-text">
        <h4>{name}</h4>
        <div className="rating-eta">
          <span className="rating">⭐{avgRating}</span>
          <span className="eta">{sla.slaString}</span>
        </div>

        <p>{cuisines.join(", ")}</p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default ResCard;
