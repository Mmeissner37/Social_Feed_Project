import React, { useState } from 'react';


function App() {

  const [posts, setPosts] = useState([{posterName: `Michaela`, body: `First poster!`}])


  return (
    <div>
      <nav><h3>Social Feed</h3></nav>
      <form>
        <label for="name">Name: </label><br></br>
        <input type="text" id="posterName"></input><br></br>
        <label for="body">Post: </label><br></br>
        <input type="text" id="postBody"></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;
