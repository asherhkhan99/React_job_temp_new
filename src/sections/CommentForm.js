import React from "react";
import CommentHeader from "../components/CommentHeader";

const CommentForm = () => {
  return (
    <div className="row no-mrg">
      <div className="comments-form">
        <div className="section-title2">
          <CommentHeader header="  Comments(2)" />
        </div>
        <form>
          <div className="col-md-6 col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Mobile"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="col-md-12 col-sm-12">
            <textarea
              className="form-control"
              placeholder="Comment"
              defaultValue={""}
            />
          </div>
          <button className="thm-btn btn-comment" type="submit">
            submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default CommentForm;
