import React from "react";
import ShareJob from "../components/ShareJob";
import TitleHeader from "../components/TitleHeader";
import JobDetailSideBar from "./JobDetailSideBar";
import DetailBox from "../components/DetailBox";
import JobSlider from "./JobSlider";

const JobDetail = () => {
  return (
    <>
      <TitleHeader />
      <section>
        <div className="container">
          <div className="col-md-8 col-sm-8">
            <DetailBox />
          </div>
          <JobDetailSideBar />
        </div>
        <div className="container">
          <div className="col-md-8 col-sm-8">
            {" "}
            <JobSlider />
          </div>
        </div>
      </section>
    </>
  );
};
export default JobDetail;
