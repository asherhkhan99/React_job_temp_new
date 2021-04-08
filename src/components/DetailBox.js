import React from "react";

const DetailBox = () => {
  return (
    <>
      <div className="container-detail-box">
        <div className="apply-job-header">
          <h4>Front End Developer</h4>
          <a href="company-detail.html" className="cl-success">
            <span>
              <i className="fa fa-building" />
              Google
            </span>
          </a>
          <span>
            <i className="fa fa-map-marker" />
            United Kingdom
          </span>
        </div>
        <div className="apply-job-detail">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus.
          </p>
        </div>
        <div className="apply-job-detail">
          <h5>Skills</h5>
          <ul className="skills">
            <li>Css3</li>
            <li>Html5</li>
            <li>Photoshop</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Java Script</li>
          </ul>
        </div>
        <div className="apply-job-detail">
          <h5>Requirements</h5>
          <ul className="job-requirements">
            <li>
              <span>Availability</span> Hourly
            </li>
            <li>
              <span>Education</span> Graduate
            </li>
            <li>
              <span>Age</span> 25+
            </li>
            <li>
              <span>Experience</span> Intermidiate (3 - 5Year)
            </li>
            <li>
              <span>Language</span> English, Hindi
            </li>
          </ul>
        </div>
        <a href="#" className="btn btn-success">
          Apply For This Job
        </a>
      </div>
    </>
  );
};
export default DetailBox;
