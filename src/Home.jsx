import GetData from "./api/GetData";
import BlogList from "./BlogList";

const Home = () => {
    const {Data, ErrorMessage, IsLoading} = GetData('http://localhost:8080/blogs')

    return (
        <div className="home">
            {IsLoading && <div className="loading">Loading ....</div>}
            {ErrorMessage && <div className="loading">{ ErrorMessage }</div>}
            {Data && <BlogList dataBlogs={Data} titleHeader="All Blogs" />}
        </div>
    );
}

export default Home;