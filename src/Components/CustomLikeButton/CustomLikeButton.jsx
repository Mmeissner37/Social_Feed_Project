import React, { useState } from 'react';
import"./CustomLikeButton.css";

const CustomLikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick() {
        if (buttonClass === 'inactive') {
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive')
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
}
 
export default CustomLikeButton;

