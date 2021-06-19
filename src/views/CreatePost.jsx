import moment from 'moment';

import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const created = moment(new Date()).format('LLL');

        console.log(created);
        const tempBlogObj = {
            title,
            author,
            body,
            created
            
        }
          // Local fetch
          //fetch("http://localhost:8000/posts",{
          fetch("https://my-json-server.typicode.com/sukhvi/react-blog/posts",{
          
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(tempBlogObj)
        }).then(() =>{
            history.push('/');
        })
    }

  return (
    <div className="createBlog">
      <div className="blogTitle text-center">
        Use the below form to create a blog.
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div class="input-container ">
          <input
            id="blogTitle"
            value={title}
            className="input"
            type="text"
            onChange={(e)=> setTitle(e.target.value)}
            required
            placeholder=" "
          />
          <div className="cut"></div>
          <label for="blogTitle" class="placeholder">
            Blog Title
          </label>
        </div>
        <div className="input-container ">
          <input
            id="author"
            value={author}
            className="input"
            required
            type="text"
            placeholder=" "
            onChange={(e)=> setAuthor(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label for="author" class="placeholder">
            Author 
          </label>
        </div>
        <div className="input-container textarea">
          <textarea
            id="blogBody"
            value={body}
            className="input "
            required
            placeholder=" "
            onChange={(e)=> setBody(e.target.value)}
          />
          <div className="cut"></div>
          <label for="blogBody" class="placeholder">
            Blog Body
          </label>
        </div>
        <button className="readMore" type="submit" >Submit</button>

        
      </form>
    </div>
  );
};

export default CreatePost;
