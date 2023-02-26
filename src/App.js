import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import DisplayPostList from './Components/DisplayPostList/DisplayPostList';


function App() {

  const [posts, setPosts] = useState([{posterName: `Michaela Meissner`, postBody: `First poster! Whoohoo!`}])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost}/> 
      <DisplayPostList parentPosts={posts} />

    </div>
  );
}

export default App;
