import { NavLink, useHistory, useParams } from "react-router-dom";
import useFetchData from "../util/useFetchData";

const PostDetail = () => {
  const { id } = useParams();

  const { data: post } = useFetchData(`http://localhost:8000/posts/${id}`);
  const handleDelete = id => {
    fetch(`http://localhost:8000/posts/`+id, {
      method:'DELETE'
    }).then(()=>{
      history.push('/')
    });
  }

  const history = useHistory();

  return (
    <div>
      <NavLink className="backButton"  to="/">
        Back
      </NavLink>
      
      {post && (
        <div className="postDetails">
          <div className="blogTitle">{post.title}</div>
          <div className="blogAuthor">Author Name: <span>{post.author}</span></div >
          <div className="blogBody">{post.body}</div>
          <a className="deleteButton" onClick={() => handleDelete(post.id)} >Delete</a>
        </div>
        
      )}
    </div>
  );
};

export default PostDetail;
