import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] = useState([{posterName: `Michaela`, body: `First poster!`}])

  return (
    <div>
      <NavBar />
      <CreatePostForm />

    </div>
  );
}

export default App;
