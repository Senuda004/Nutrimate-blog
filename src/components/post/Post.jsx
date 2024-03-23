import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa'; // Import FaPlus icon from react-icons/fa
import "./post.css";

export default function Post({ post }) {
  const PF="https://sdgp-cs14-back-end-blog.onrender.com/uploads/"


  return (
    <div className="post">
      {post.img && <img className="postImg" src ={PF + post.img} alt=""/>}
      <div className="postInfo">
        <div className="postCats">
          {post.category.map(c => (
            <span className="postCat"> {c.name} </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc"> {post.description} </p>

      
    </div>
  );
}
