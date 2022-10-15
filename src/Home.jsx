import { useState } from "react";
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

    let inputUser = "wijaya"
    let title = `${inputUser} Blog`

    return (
        <div className="home">
            {/* props */}
            <BlogList blogs={blogs} titleSection='All Blog' />
            {/* akan memfilter hanya blog dengan author 
            wijaya saja yang akan di tampilkan */}
            <BlogList 
            blogs={blogs.filter((blog)=>blog.author===inputUser)} 
            titleSection={title}/>
        </div>
    );
}

export default Home;