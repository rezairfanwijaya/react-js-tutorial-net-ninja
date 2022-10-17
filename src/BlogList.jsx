import { Link } from "react-router-dom"

const BlogList = ({ dataBlogs, titleHeader }) => {
    return (
        <>
            <h2 className="title-section-blog">{titleHeader}</h2>
            {dataBlogs.map((blog)=>(
                <div className="blog-preview" id={ blog.id }>
                <Link to={`/blog/${blog.id}`}>
                    <h3>{ blog.title }</h3>
                </Link>
                    <p>{ blog.preview }</p>
                    <p>oleh : { blog.author }</p>
                </div>
            ))}
        </>
    )
}

export default BlogList