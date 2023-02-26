import React, { useState } from 'react';



const CreatePostForm = (props) => {

    const [posterName, setName] = useState(' ');
    const [postBody, setBody] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            posterName: posterName,
            postBody: postBody,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label className='form-box'>Name: </label>
            <input type="text" value={posterName} onChange={(event) => setName(event.target.value)} /><br></br>
            <label className='form-box'>Post: </label>
            <input type="text" value={postBody} onChange={(event) => setBody(event.target.value)} />
            <button type="submit" className="btn btn-primary btn-sm" style={{'margin-top': '0.5em'}}>Create</button>
        </form>
     );
}
 
export default CreatePostForm;
