import "./App.css";
// import components
import AllBlogs from "./pages/AllBlogs";

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
            const response = await fetch(`${apiURL}/blog/`)
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        } catch (error) {
            console.log(`error: ${error}`)
        }
    } // get Blogs



    return (
        <div className="App">
            <h1>Blog for DOGS</h1>
            <Routes>
                <Route exact path="/" element={<AllBlogs blogs={blogs}/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
