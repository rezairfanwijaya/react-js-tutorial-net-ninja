const BlogList = ({ blogs, titleSection }) => {
    return (
        <>
            {/* foreach nya jsx */}
            <h2 className="title-section-blog">
                {titleSection}
            </h2>

            {blogs.map((blog) => (
                <div className="blog-preview" id={blogs.id}
                    key={blogs.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>oleh : {blog.author}</p>
                </div>
            ))}
        </>
    );
}

export default BlogList;