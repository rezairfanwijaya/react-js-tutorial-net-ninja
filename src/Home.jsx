import { useState } from "react";
import BlogList from "./BlogList";

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
            {/* props */}
            <BlogList blogs={blogs} titleSection='All Blog' />
        </div>
    );
}

export default Home;