import React, { useState } from 'react';
import"./CustomDislikeButton.css";

const CustomDislikeButton = ({isPostDisliked, setIsPostDisliked, message}) => {

    // const [buttonDislikeClass, setButtonDislikeClass] = useState('inactive-dislike');

    // function handleClick() {
    //     if (buttonDislikeClass === 'inactive-dislike') {
    //         setButtonDislikeClass('active-dislike');
    //     }
    //     else {
    //         setButtonDislikeClass('inactive-dislike')
    //     }
    // }

    return ( 
        <div>
            <button className={ isPostDisliked ? "active-dislike" : "inactive-dislike" } onClick={()=> setIsPostDisliked(!isPostDisliked)}>{message}</button>
        </div>
     );
}
 
export default CustomDislikeButton;

