

const DisplayPostList = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentPosts.map((post, index) => {
                return(
                <tr key = {index}>
                    <td>{post.posterName}</td>
                    <td>{post.postBody}</td>
                    <td><button>Like</button><button>Dislike</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayPostList;

