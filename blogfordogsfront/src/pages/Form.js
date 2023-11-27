import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
    
    const navigate = useNavigate();
    const params = useParams();


    // will get current post here for edit
    const currentBlog = useMemo(() => props.blogs.find((blog) => blog.id === parseInt(params.id)), [params.id, props.blogs]);


    const [formData, setFormData] = useState(
        props.formType === "new" ? {
            title: "",
            body: "",
        // ELSE STATEMENT
        // if form type is "edit" basically
        } : {
            title: currentBlog.title,
            body: currentBlog.body,
            id: parseInt(currentBlog.id)
        }
    );

    // handle change
    const handleChange = (event) => {
        // prevent form refresh
        // event.preventDefault();
        // pass formData to hanbdleFormSubmission
        setFormData((prev) => (
                {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ));
    }; // handleChange
    // handle submit

    const handleSubmission = (event) => {
        // prevent form refresh
        event.preventDefault();
        props.handleFormSubmission(formData, props.formType);
        navigate("/");
    }; // handleSubmit
    return(
        <form onSubmit={handleSubmission}>
            <h3>Subject</h3>              
            <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <h3>Details</h3>
            <input 
                type="text"
                name="body"
                value={formData.body}
                onChange={handleChange}
            />
            <input type="submit" value={props.buttonLabel} />
        </form>
    )
}

export default Form;