import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [preview, setPreview] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("reza abdas")
    const [isLoading, setIsLoading] = useState(false)

    const PostNewBlog = (e) => {
        e.preventDefault()
        const newBlog = { title, preview, content, author }
        setIsLoading(true)

        setTimeout(() => {
            fetch("http://localhost:8080/blogs", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newBlog)
            }).then(() =>{
                setIsLoading(false)
                alert('Success add new blog')
                setAuthor("")
                setContent("")
                setPreview("")
                setTitle("")
                setAuthor("reza abdas")
            })

        }, 2000);
    }


    return (<>
        <div className="form-create-blog">
            <div className="heading">
                <h1>Create New Blog</h1>
            </div>

            <div className="form">
                <form onSubmit={PostNewBlog}>
                    <div className="section">
                        <label htmlFor="">Title Blog</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                    </div>
                    <div className="section">
                        <label htmlFor="">Preview Title (max:300)</label>
                        <textarea cols="10" rows="4" onChange={(e) => setPreview(e.target.value)} value={preview} required maxLength={300}></textarea>
                    </div>
                    <div className="section">
                        <label htmlFor="">Content</label>
                        <textarea cols="10" rows="20" onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
                    </div>
                    <div className="section">
                        <label htmlFor="">Author</label>
                        <select onChange={(e) => setAuthor(e.target.value)} value={author} required>
                            <option value="reza irfan wijaya">Reza Irfan Wijaya</option>
                            <option value="reza irfan">Reza Irfan</option>
                            <option value="reza abdas">Reza Abdas</option>
                        </select>
                    </div>
                    <div className="section">
                        {isLoading && <button disabled className="disable">Process....</button>}
                        {!isLoading && <button>Submit</button>}
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default CreateBlog;