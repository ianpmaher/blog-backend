import Blog from "../components/Blog";
import { Link } from "react-router-dom";

const AllBlogs = (props) => {
    return (
        <div>
            <h1>All blogs</h1>
            <Link to="/new">
                <button>New Blog</button>
            </Link>
            {props.blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} deleteBlog={props.deleteBlog} />
            ))}
        </div>    
    )
}

export default AllBlogs