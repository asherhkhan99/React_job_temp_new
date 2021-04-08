import React from "react";
import SideBar from "./SideBar";
import PostDetail from "../components/PostDetail";
import { blogDetailData } from "../data/blogData";
import bannerImg from "../img/banner-10.jpg";
import Banner from "../components/Banner";
import Comment from "../sections/Comment";
import CommentForm from "../sections/CommentForm";
const BlogDetail = () => {
  return (
    <>
      <Banner bgImg={bannerImg} title="Blog Detail" />
      <section className="section">
        <div className="container">
          <div className="row .no-mrg">
            {/* Start Blogs */}
            <div className="col-md-8">
              {blogDetailData.map((data) => {
                const { date, author, img, detail, header, comments } = data;
                return (
                  <PostDetail
                    key={date}
                    date={date}
                    author={author}
                    img={img}
                    detail={detail}
                    header={header}
                    comments={comments}
                  />
                );
              })}
              <Comment />
              <CommentForm />
            </div>

            {/* End Blogs */}
            {/* Sidebar Start */}
            <SideBar />

            {/* End Sidebar Start */}
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetail;
