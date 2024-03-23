import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa'; // Import FaPlus icon from react-icons/fa
import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
      {/* Render blog posts */}
      {posts.map((p)=>(
        <Post key={p._id} post={p} />
      ))}
      {/* "Add Post" button */}
      <Link to="/write" className="addPostButton">
        <FaPlus />
      </Link>
    </div>
  );
}
