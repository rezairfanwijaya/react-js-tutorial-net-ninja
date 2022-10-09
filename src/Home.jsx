import { useState } from "react";

const Home = () => {
    const [blogs, setBlos] = useState([
        {
            title: 'blog pertama',
            body: 'ini merupakan blog pertama saya',
            author: 'reza',
            id: 1
        },
        {
            title: 'blog kedua',
            body: 'ini merupakan blog kedua saya',
            author: 'ifran',
            id: 2
        },
        {
            title: 'blog ketiga',
            body: 'ini merupakan blog ketiga saya',
            author: 'wijaya',
            id: 3
        },
    ]);

    return (
        <div className="home">
            {/* foreach nya jsx */}
            {blogs.map((blog) => (
                <div className="blog-preview" id={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;