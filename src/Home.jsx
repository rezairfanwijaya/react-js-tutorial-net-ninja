import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState('');

    // fetching data menggunakan useEffect
    useEffect(() => {
        fetch('http://localhost:8080/blogs')
            .then(res => { return res.json() })
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="home">
            {/* blogs && digunakan untuk memastikan bahwa data
            blogs sudah terisi sehingga bisa dipakai oleh
            component BlogList
        */}

            {
                blogs &&
                <BlogList dataBlogs={blogs} titleHeader="All blogs" />
            }
        </div>
    );
}

export default Home;