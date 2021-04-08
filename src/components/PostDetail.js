import React from "react";

function PostDetail({
  date,
  author,
  img,
  detail,
  header,
  comments,
  textDetail
}) {
  return (
    <article className="blog-news">
      <div className="full-blog">
        <figure className="img-holder">
          <a href="blog-detail.html">
            <img src={img} className="img-responsive" alt="News" />
          </a>
          <div className="blog-post-date">{date}</div>
        </figure>
        <div className="full blog-content">
          <div className="post-meta">
            By: <span className="author">{author}</span> | {comments} Comments{" "}
          </div>
          <a href="blog-detail.html">
            <h2>{header}</h2>
          </a>
          <div className="blog-text">
            <p>{textDetail}</p>
            <p>{textDetail}</p>
            <p>{textDetail}</p>
            <div className="post-meta">
              Filed Under:{" "}
              <span className="category">
                <a href="#">Technology</a>
              </span>
            </div>
          </div>
          <div className="row no-mrg">
            <div className="blog-footer-social">
              <span>
                Share <i className="fa fa-share-alt" />
              </span>
              <ul className="list-inline social">
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
                    <i className="fa fa-google-plus" />
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
      </div>
    </article>
  );
}

export default PostDetail;
