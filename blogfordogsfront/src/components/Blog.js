import { Link, useNavigate } from "react-router-dom";

const Blog = ({ blog, deleteBlog }) => {
    
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        event.preventDefault();
        deleteBlog(blog.id);
        navigate("/");
    };

    return (
        <div>
            <Link to={`/blogs/${blog.id}`}>
                <h1>{blog.title}</h1>
            </Link>
            <h2>{blog.body}</h2>
            <form onSubmit={handleDelete}>
                <input type="submit" value="Delete Blog" />
            </form>
        </div>
    );
};

export default Blog;
