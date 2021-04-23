import React from "react";

const JobCard = ({ pic, name, jobtitle, icon, Job,jobType, location, rate,premium }) => {
  const full = "full-time"
  const part  = "part-time"
  const free = "freelanc"
  const entern = "enternship"
  var setType;
  if (Job === "Full Time") setType = full
  else if(Job === "Part Time") setType = part
  else if(Job === "Freelancer") setType = free
  else setType = entern
  
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="grid-view brows-job-list">
          <div className="brows-job-company-img">
            <img src={pic} className="img-responsive" alt="" />
          </div>
          <div className="brows-job-position">
            <h3>
              <a href="job-detail.html">{name}</a>
            </h3>

            <p>
              <span>{jobtitle}</span>
            </p>
          </div>
          <div className="job-position">
            <span className="job-num">{icon}</span>
          </div>
          <div className="brows-job-type">
            <span className={setType}>{Job}</span>
          </div>
          <ul className="grid-view-caption">
            <li>
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker"></i>
                  {location}
                </p>
              </div>
            </li>
            <li>
              <p>
                <span className="brows-job-sallery">
                  <i className="fa fa-money"></i>
                  {rate}
                </span>
              </p>
            </li>
          </ul>
          {premium && <span class="tg-themetag tg-featuretag">Premium</span>}
        </div>
      </div>
    </>
  );
};
export default JobCard;
