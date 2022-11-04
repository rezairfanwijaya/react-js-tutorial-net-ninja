import { Link } from "react-router-dom";
import GetData from "./api/GetData";
import Tags from "./Tags";

const BlogList = () => {
    const { Data, ErrorMessage, IsLoading } = GetData('http://localhost:8080/blogs')

    return (<>
        <Tags />
        <div className="home">
            {IsLoading && <div className="loading">Loading....</div>}
            {ErrorMessage && <div className="loading">{ErrorMessage}</div>}
            {Data && Data.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2 className="blog-heading">{blog.title}</h2>
                    </Link>
                    <p>{blog.preview}</p>
                    <p>by : {blog.author}</p>
                </div>
            ))}
        </div>
    </>);
}

export default BlogList;