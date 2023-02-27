import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import DisplayPostList from './Components/DisplayPostList/DisplayPostList';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{posterName: `Michaela Meissner`, postBody: `First poster! Whoohoo!`}])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className = 'container-fluid'>
      <div className='NavBar'>
        <NavBar />
          <div className='col-lg-6'>
            <div className='text-center'>
              <div className='border-box'>
                <CreatePostForm addNewPostProperty={addNewPost}/> 
              </div>
              <div className='post-box'>
                <div className='border-box'>
                  <DisplayPostList parentPosts={posts} />
                </div>
              </div>
            </div>
          </div>
      </div>
     </div>
  );
}

export default App;
