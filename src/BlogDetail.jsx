const BlogDetail = (props) => {
    // ambil value param
    const title = props.match.params.title

    return (
        <div className="blog-detail">
            <h2>Blog detail { title }</h2>
        </div>
    );
}

export default BlogDetail;