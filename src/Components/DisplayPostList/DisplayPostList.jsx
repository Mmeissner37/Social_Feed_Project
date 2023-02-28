
import ButtonHandler from "../ButtonHandler/ButtonHandler"
import PostPresenter from "../PostPresenter/PostPresenter";

const DisplayPostList = (props) => {
  return (
    <table>
      <tbody>
        {props.parentPosts.map((post, index) => {
          return (
            <PostPresenter post={post} key={index}/>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPostList;

// return(
//     <ul>
//         {props.parentPosts.map( item => <li key={item.id}><Post post={item} /></li>)}
//     </ul>
// )
