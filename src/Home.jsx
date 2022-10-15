import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
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
        {
            title: 'blog empat',
            body: 'ini merupakan blog empat saya',
            author: 'wijaya',
            id: 4
        },
    ]);

    const [isUseEffect, setIsUseEffect] = useState(false)

    // function ini menerima id blog dari child component
    // yaitu di file BlogList.jsx
    const deleteBlogById = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    // useeffect dependency
    // pada dasarnya function yang berada di dalam useeffect
    // akan dirun secara otomatis ketika component nya dirender
    // tapi ketika kita menggunakan useeffect dependency
    // kita bisa hanya menjalankan useEffect ketika pertama kali
    // component di render saja, tidak setiap kali state nya update
    // dan memilih ketika state apa yang berubah kita akan 
    // mentrigger usereffect
    useEffect(() => {
        console.log("Hallo")
        console.log(isUseEffect)
    }, [isUseEffect]) // isUseEffect merupakan state trigger 

    return (
        <div className="home">
            {/* props */}
            {/* deleteBlog akan menjadi perantara
            si child component (BlogList.jsx) untuk
            mengirim id ke parent
            component (Home.jsx) untuk dihapus */}
            <BlogList
                blogs={blogs} titleSection='All Blog'
                deleteBlog={deleteBlogById}
            />

            <button onClick={() => setIsUseEffect(true)}>run use Effect</button>
        </div>
    );
}

export default Home;