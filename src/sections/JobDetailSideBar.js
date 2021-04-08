import React from "react";
import ShareJob from "../components/ShareJob";
import img1 from "../img/com-2.jpg";
const JobDetailSideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-box">
          <span className="sidebar-status">Full Time</span>
          <h4 className="flc-rate">20K - 30K</h4>
          <div className="sidebar-inner-box">
            <div className="sidebar-box-thumb">
              <img src={img1} className="img-responsive" alt="" />
            </div>
            <div className="sidebar-box-detail">
              <h4>Google Info</h4>
              <span className="desination">App Designer</span>
            </div>
          </div>
          <div className="sidebar-box-extra">
            <ul>
              <li>Php</li>
              <li>Android</li>
              <li>Html</li>
              <li className="more-skill bg-primary">+3</li>
            </ul>
            <ul className="status-detail">
              <li className="br-1">
                <strong>Canada</strong>Location
              </li>
              <li className="br-1">
                <strong>748</strong>View
              </li>
              <li>
                <strong>03</strong>Post
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="btn btn-sidebar bt-1 bg-success">
          Apply For This
        </a>
      </div>

      <ShareJob />
    </>
  );
};
export default JobDetailSideBar;
