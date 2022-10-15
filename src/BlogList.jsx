const BlogList = ({ blogs, titleSection, deleteBlog }) => {
    return (
        <>
            {/* foreach nya jsx */}
            <h2 className="title-section-blog">
                {titleSection}
            </h2>

            {blogs.map((blog) => (
                <div className="blog-preview" id={blog.id}
                    key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>oleh : {blog.author}</p>
                    <button
                        onClick={()=>deleteBlog(blog.id)}>
                        Delete blog
                    </button>
                </div>
            ))}
        </>
    );
}

export default BlogList;