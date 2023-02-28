import React from "react";
import ButtonHandler from "../ButtonHandler/ButtonHandler";

const PostPresenter = ({post}) => {
  return (
    <>
      <tr>
        <td className="table-data">{post.posterName}</td>
        <td>{post.postBody}</td>
      </tr>
        <ButtonHandler post={post}/>
    </>
  );
};

export default PostPresenter;
