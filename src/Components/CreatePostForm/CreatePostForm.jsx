import React, { useState } from 'react';



const CreatePostForm = (props) => {

    const [posterName, setName] = useState('');
    const [postBody, setBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: posterName,
            body: postBody
        };
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label for="name">Name: </label>
            <input type="text" value={posterName} onChange={(event) => setName(event.target.value)} /><br></br>
            <label for="body">Post: </label>
            <input type="text" value={postBody} onChange={(event) => setBody(event.target.value)} />
            <button type="submit">Create</button>
        </form>
     );
}
 
export default CreatePostForm;
