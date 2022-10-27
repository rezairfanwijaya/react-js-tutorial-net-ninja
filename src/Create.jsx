import { useState } from "react";

const CreateBlog = () => {
    // state untuk menampung inputan pada form new blog
    const [title, settitle] = useState('');
    const [preview, setpreview] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('rezairfanwijaya');
    const [isLoading, setisLoading] = useState(false);

    // function untuk handle submit form new blog
    const handleSubmit = (e) => {
        // matikan reload yang terjadi ketika menekan tombol submit (Add Blog)
        e.preventDefault()

        // nyalakan loading
        setisLoading(true)

        // ambil data dari state yang sudah diketik user di form
        const newBlog = { title, body, author, preview }

        // call api with waiting time 
        setTimeout(() => {
            fetch('http://localhost:8080/blogs', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newBlog)
            }).then(() => setisLoading(false))

        }, 1200);
    }

    return (
        <div className="create-blog">
            <h1>Create New Blog</h1>
            <div className="form">
                <form onSubmit={handleSubmit} className="new-blog-form">
                    <div className="single-input">
                        <label>Blog Title</label>
                        <br></br>
                        <input
                            type="text"
                            required
                            onChange={(e) => settitle(e.target.value)}
                        />
                    </div>
                    <div className="single-input">
                        <label>Blog Preview</label>
                        <br></br>
                        <textarea
                            cols="91"
                            rows="3"
                            maxLength={302}
                            required
                            onChange={(e) => setpreview(e.target.value)}
                        />
                    </div>
                    <div className="single-input">
                        <label>Content</label>
                        <br></br>
                        <textarea
                            cols="91"
                            rows="10"
                            required
                            onChange={(e) => setbody(e.target.value)}
                        />
                    </div>
                    <div className="single-input">
                        <label>Author</label>
                        <br></br>
                        <select
                            value={author}
                            onChange={(e) => setauthor(e.target.value)}
                        >
                            <option value="rezairfanwijaya">Reza Irfan Wijaya</option>
                            <option value="rezaabdas">Reza Abdas</option>
                            <option value="rezairfan">Reza Irfan</option>
                        </select>
                    </div>
                    {isLoading && <button className="add-blog loading" disabled>Processed...</button>}
                    {!isLoading && <button className="add-blog">Add Blog</button>}
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;