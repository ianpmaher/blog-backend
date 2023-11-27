import styled from "styled-components";

import Blog from "../components/Blog";
import { Link } from "react-router-dom";

const BlogCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    background-color: darkgoldenrod;
    border: 5px solid black;
    border-radius: 20px;
    margin: 0.5rem auto;
    padding: 0 auto;
    max-width: 40%;
    transition: transform 0.2s linear;
    &:hover {
        transform: scale(1.1);
    }
`


const AllBlogs = (props) => {
    return (
        <div>
            <h1>All blogs</h1>
            <Link to="/new">
                <button>New Blog</button>
            </Link>
            {props.blogs.map((blog) => (
                <BlogCard>
                    <Blog key={blog.id} blog={blog} deleteBlog={props.deleteBlog} />
                </BlogCard>
            ))}
        </div>    
    )
}

export default AllBlogs