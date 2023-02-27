import CustomDislikeButton from "../CustomDislikeButton/CustomDislikeButton";
import CustomLikeButton from "../CustomLikeButton/CustomLikeButton";


const DisplayPostList = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentPosts.map((post, index) => {
                return(
                <tr>
                <tr key = {index}>
                    <td className="table-data">{post.posterName}</td>
                    <td>{post.postBody}</td>
                    <td><CustomLikeButton message='Like' /></td>
                    <td><CustomDislikeButton message="Dislike" /></td>
                </tr>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayPostList;

