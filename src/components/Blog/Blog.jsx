import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const Blog = ({ blogs  }) => {
    
  // Numeral is light weight libary to format the numbers.
  let numeral = require("numeral");

  

  return (
    <div className="blogs">
      {blogs &&
        blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="blogTitle"> {blog.title}</div>
            <div className="blogAuthor">
              Created by: <span>{blog.author}</span> on {blog.created}
            </div>

            <div className="shareTo">
              <div className="shareCount">
                {numeral(blog.share).format("0,0")}
                <br />
                <span>Shares</span>
              </div>
              <div className="shareButtons">
                <a href="" className="fbShare">
                  <FontAwesomeIcon icon={faFacebookF} /> Share
                </a>
                <a href="" className="twitterShare">
                  <FontAwesomeIcon icon={faTwitter} /> Tweet
                </a>
                <a href="" className="linkedinShare">
                  <FontAwesomeIcon icon={faLinkedinIn} /> Share
                </a>
                <a href="" className="pInterest">
                  <FontAwesomeIcon icon={faPinterestP} /> Pin
                </a>
              </div>
            </div>
            <div className="blogBody">{blog.body}</div>
            <Link to={`posts/${blog.id}`} className="readMore">Readmore</Link>
           
          </div>
        ))}
    </div>
  );
};

export default Blog;
