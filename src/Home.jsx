import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    // fetching data menggunakan useEffect
    useEffect(() => {
       setTimeout(()=>(
        fetch('http://localhost:8080/blogs')
        .then(res => { return res.json() })
        .then(
            data => setBlogs(data),
            setIsLoading(false)
        )
       ),3000)
    }, []);

    return (
        <div className="home">
            {/* blogs && digunakan untuk memastikan bahwa data
            blogs sudah terisi sehingga bisa dipakai oleh
            component BlogList
        */}
            {
                isLoading && <div className="loading">Loading.......</div>
            }

            {
                blogs &&
                <BlogList dataBlogs={blogs} titleHeader="All blogs" />
            }
        </div>
    );
}

export default Home;