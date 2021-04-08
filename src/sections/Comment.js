import React from "react";
import CommentHeader from "../components/CommentHeader";
import CommentCard from "../components/CommentsCard";
import { CommentData } from "../data/blogData";
const Comment = () => {
  return (
    <div className="row no-mrg">
      <div className="comments">
        <CommentHeader header="Comments (2)" />

        {CommentData.map((data) => {
          const { date, author, img, detail } = data;
          return (
            <CommentCard
              key={date}
              date={date}
              author={author}
              img={img}
              detail={detail}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Comment;
