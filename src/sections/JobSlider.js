import React from "react";
import JobSliderCard from "../components/JobSliderCard";
import Slider from "react-slick";

const JobSlider = () => {
  const detail = [
    {
      time: "Monthly",
      cost: "$570/Mo",
      header: "Duff Beer",
      destination: "Marketting",
      detail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
    },
    {
      time: "Weekly",
      cost: "$200/We",
      header: "Cyberdyne Systems",
      destination: "Human Resource",
      detail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
    },
    {
      time: "Hourly",
      cost: "$17/hr",
      header: "Google Inc",
      destination: "Software Designer",
      detail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
    },

    {
      time: "Yearly",
      cost: "$2000/Pa",
      header: "Wayne Enterprises",
      destination: "App Designer",
      detail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
    }
  ];
  return (
    <>
      <div className="container-detail-box">
        <div className="row">
          <div className="col-md-12">
            <h4>Similar Jobs</h4>
          </div>
        </div>

        <div className="row">
          <div className="grid-slide-2" className="slider">
            <Slider
              slidesToShow={2}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={3000}
              dots={false}
              arrows={false}
              prevArrow={false}
              nextArrow={false}
            >
              {detail.map((data) => {
                const { time, cost, header, destination, detail } = data;
                return (
                  <JobSliderCard
                    time={time}
                    cost={cost}
                    header={header}
                    destination={destination}
                    detail={detail}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobSlider;
