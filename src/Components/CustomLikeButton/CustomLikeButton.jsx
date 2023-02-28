import React, { useState } from 'react';
import"./CustomLikeButton.css";

const CustomLikeButton = ({isPostLiked, setIsPostLiked, message}) => {

    // const [buttonLikeClass, setButtonLikeClass] = useState('inactive-like');

    // function handleClick() {
    //     if (buttonLikeClass === 'inactive-like') {
    //         setButtonLikeClass('active-like');
    //     }
    //     else {
    //         setButtonLikeClass('inactive-like')
    //     }
    // }

    return ( 
        <div>
            <button className={ isPostLiked ? "active-like" : "inactive-like" } onClick={() => setIsPostLiked(!isPostLiked)}>{message}</button>
        </div>
     );
}
 
export default CustomLikeButton;

