import React, { Fragment } from "react";
import "./Card.css";

const Card = ({ info }) => {
  return (
    <Fragment>
      <div className="card-container">
        <div className="main-slider" style={{ background: `${info.image}` }}>
          <div className="title-slider">
            <h6>{info.subTitle}</h6>
            <h4>{info.title}</h4>
          </div>
          <div className="info-slider">
            <div className="chapter inner-dif">
              <b><p>{info.chapter}</p></b>
              <p>Chapter</p>
            </div>
            <div className="items inner-dif">
            <b><p>{info.items}</p></b>
              <p>Items</p>
              </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
