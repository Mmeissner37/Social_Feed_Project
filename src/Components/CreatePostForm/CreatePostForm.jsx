
const CreatePostForm = (props) => {
    return ( 
        <form>
            <label for="name">Name: </label><br></br>
            <input type="text" id="posterName"></input><br></br>
            <label for="body">Post: </label><br></br>
            <input type="text" id="postBody"></input>
            <button type="submit">Create</button>
        </form>
     );
}
 
export default CreatePostForm;
