import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBlog = ({ blogs }) => {
    const { params } = useParams();

    // track the ID of which blog we are viewing/editing
    const currentBlog = useMemo(() => blogs.find((blog) => blog.id === parseInt(params.id)), [params.id, blogs]);

    return (
        <div>
            <Link to="/">Back to all blogs</Link>
            <h1>{currentBlog.title}</h1>
            <h2>{currentBlog.body}</h2>
            {/* <Link to = {`/edit/${currentBlog.id}`}>
                <button>Edit Blog</button>
            </Link> */}
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default SingleBlog;