import React from "react";
import img1 from "../img/com-2.jpg";
import img2 from "../img/gb.svg";

const TitleHeader = () => {
  return (
    <>
      <section className="inner-header-page">
        <div className="container">
          <div className="col-md-8">
            <div className="left-side-container">
              <div className="freelance-image">
                <a href="company-detail.html">
                  <img src={img1} className="img-responsive" alt="" />
                </a>
              </div>
              <div className="header-details">
                <h4>Front End Developer</h4>
                <p>Google</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> 7 Vacancy
                    </a>
                  </li>
                  <li>
                    <div className="star-rating" data-rating="4.2">
                      <span className="fa fa-star fill" />
                      <span className="fa fa-star fill" />
                      <span className="fa fa-star fill" />
                      <span className="fa fa-star fill" />
                      <span className="fa fa-star-half fill" />
                    </div>
                  </li>
                  <li>
                    <img className="flag" src={img2} alt="" /> United Kingdom
                  </li>
                  <li>
                    <div className="verified-action">Verified</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 bl-1 br-gary">
            <div className="right-side-detail">
              <ul>
                <li>
                  <span className="detail-info">Availability</span>Full Time
                </li>
                <li>
                  <span className="detail-info">Experience</span>5 Year
                </li>
                <li>
                  <span className="detail-info">Age</span>22+ Year
                </li>
              </ul>
              <ul className="social-info">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
    </>
  );
};
export default TitleHeader;
