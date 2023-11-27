import "./App.css";
// import components
import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";

// import hooks
import { useState, useEffect } from "react";
// import components from React-Router
import { Route, Routes } from "react-router-dom";

// API url for heroku
const apiURL = "https://ian-blog-api-0c323261d6d3.herokuapp.com";

function App() {
    // set up state for our Blogs n stuff
    const [blogs, setBlogs] = useState([]);

    // functions for stuff
    // fetch bit
    const getBlogs = async () => {
        try {
            const response = await fetch(`${apiURL}/blogs/`);
            const data = await response.json();
            setBlogs(data);
            console.log(data);
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }; // get Blogs

    // ==================== //
    // handle form submission function //
    const handleFormSubmission = async (data, type) => {
        // if there is an id, we are EDITING
        // if there is NO id, we are creating 
        if (type === "new") {
            // if new, we are creating a resource
            const response = await fetch(`${apiURL}/blogs/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            getBlogs();
        } else {
            // if NOT new, we are editing // EDIT FETCH
            const response = await fetch(`${apiURL}/blogs/${data.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            getBlogs();
            // we will need to pass the id of the post we are editing
            // we will need to pass the data we are editing
            // we will need to specify the method as a PUT request
        }
    }

    // ==================== //
    // useEffect
    useEffect(() => {
        getBlogs();
    }, []); // useEffect

    return (
        <div className="App">
            <h1>Blog for DOGS</h1>
            <Routes>
                <Route exact path="/" element={<AllBlogs blogs={blogs} />} />
                {/* for the post/id show route, we would need to use useParams to specify which post */}
                <Route exact path="/blogs/:id" element={<SingleBlog blogs={blogs} />} />
                {/* <Route exact path="/edit/:id" element={<h1>Edit Blog</h1>} /> */}
            </Routes>
        </div>
    );
}

export default App;
