import { useState } from "react";

const CreateBlog = () => {
    // state untuk menampung inputan pada form new blog
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('rezairfanwijaya');

    // function untuk handle submit form new blog
    const handleSubmit = (e) => {
        // matikan reload yang terjadi ketika menekan tombol submit (Add Blog)
        e.preventDefault()
        
        // ambil data dari state yang sudah diketik user di form
        const newBlog = {title, body, author} 
        console.log(newBlog)
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
                        onChange={(e)=>settitle(e.target.value)}
                        />
                    </div>
                    <div className="single-input">
                        <label>Content</label>
                        <br></br>
                        <textarea 
                        cols="91" 
                        rows="10" 
                        required
                        onChange={(e)=>setbody(e.target.value)}
                        />
                    </div>
                    <div className="single-input">
                        <label>Author</label>
                        <br></br>
                        <select 
                        value={author}
                        onChange={(e)=>setauthor(e.target.value)}
                        >
                            <option value="rezairfanwijaya">Reza Irfan Wijaya</option>
                            <option value="rezaabdas">Reza Abdas</option>
                            <option value="rezairfan">Reza Irfan</option>
                        </select>
                    </div>
                    <button className="add-blog">Add Blog</button>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;