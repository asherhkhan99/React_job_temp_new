import React from "react";
const JobSliderCard = ({ time, cost, header, detail, desination }) => {
  return (
    <>
      <div className="freelance-box slide">
        <div className="popular-jobs-container">
          <div className="popular-jobs-box">
            <span className="popular-jobs-status bg-success">{time}</span>
            <h4 className="flc-rate">{cost}</h4>
            <div className="popular-jobs-box">
              <div className="popular-jobs-box-detail">
                <h4>{header}</h4>
                <span className="desination">{desination}</span>
              </div>
            </div>
            <div className="popular-jobs-box-extra">
              <ul>
                <li>Php</li>
                <li>Android</li>
                <li>Html</li>
                <li className="more-skill bg-primary">+3</li>
              </ul>
              <p>{detail}</p>
            </div>
          </div>
          <a href="#" className="btn btn-popular-jobs bt-1">
            View Detail
          </a>
        </div>
      </div>
    </>
  );
};
export default JobSliderCard;
