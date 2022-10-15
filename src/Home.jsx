import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    // fetching data menggunakan useEffect
    useEffect(() => {
        setTimeout(() => (
            fetch('http://localhost:8080/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error(`gagal mengambil data dari server. status code : ${res.status}`);
                    }
                    return res.json()
                })
                .then(
                    data => setBlogs(data),
                    setIsLoading(false)
                )
                .catch(e => {
                    setErrorMessage(e.message)
                })
        ), 3000)
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
                errorMessage && <div className="loading">{errorMessage}</div>
            }
            {
                blogs &&
                <BlogList dataBlogs={blogs} titleHeader="All blogs" />
            }
        </div>
    );
}

export default Home;