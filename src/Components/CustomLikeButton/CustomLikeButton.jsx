import React, { useState } from 'react';
import"./CustomLikeButton.css";

const CustomLikeButton = (props) => {

    const [buttonLikeClass, setButtonLikeClass] = useState('inactive-like');

    function handleClick() {
        if (buttonLikeClass === 'inactive-like') {
            setButtonLikeClass('active-like');
        }
        else {
            setButtonLikeClass('inactive-like')
        }
    }

    return ( 
        <div>
            <button className={buttonLikeClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
}
 
export default CustomLikeButton;

