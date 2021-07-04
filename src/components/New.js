import { useState } from "react";

function New() {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value }= e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    return(
        <div>
            <form>
                <input
                    name="title"
                    value={formData.title}
                    type="text"
                    onChange={handleChange}
                    placeholder="TITLE"
                />
                <input
                    name="content"
                    value={formData.content}
                    type="text"
                    onChange={handleChange}
                    placeholder="CONTENT"
                />
            <button>Submit</button>
            </form>
        </div>
    )
};

export default New;