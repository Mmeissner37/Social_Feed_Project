import React, { useState } from "react";
import CustomDislikeButton from "../CustomDislikeButton/CustomDislikeButton";
import CustomLikeButton from "../CustomLikeButton/CustomLikeButton";

const ButtonHandler = ({post}) => {
    const {isLiked, isDisliked} = post
    const [isPostLiked, setIsPostLiked] = useState(isLiked)
    const [isPostDisliked, setIsPostDisliked] = useState(isDisliked)

  return (
    <tr>
      <td>
        <CustomLikeButton message="Like" isPostLiked={isPostLiked} setIsPostLiked={setIsPostLiked}/>
      </td>
      <td>
        <CustomDislikeButton message="Dislike" isPostDisliked={isPostDisliked} setIsPostDisliked={setIsPostDisliked}/>
      </td>
    </tr>
  );
};

export default ButtonHandler;
