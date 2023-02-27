import React, { useState } from 'react';
import"./CustomDislikeButton.css";

const CustomDislikeButton = (props) => {

    const [buttonDislikeClass, setButtonDislikeClass] = useState('inactive-dislike');

    function handleClick() {
        if (buttonDislikeClass === 'inactive-dislike') {
            setButtonDislikeClass('active-dislike');
        }
        else {
            setButtonDislikeClass('inactive-dislike')
        }
    }

    return ( 
        <div>
            <button className={buttonDislikeClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
}
 
export default CustomDislikeButton;

