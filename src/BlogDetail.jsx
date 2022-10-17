import GetData from "./api/GetData";

const BlogDetail = (props) => {
    // ambil value param
    const id = props.match.params.id
    // get data blog berdasarkan title
    const { Data, ErrorMessage, IsLoading } = GetData(`http://localhost:8080/blogs/${id}`)

    return (
        <div className="home">
            {IsLoading && <div className="loading">Loading...</div>}
            {ErrorMessage && <div className="loading">{ErrorMessage}</div>}
            {Data && (
                <div className="blog-detail">
                    <h1>{Data.title}</h1>
                    <p>oleh : {Data.author}</p>
                    <p style={{ marginTop:"20px" }}>{Data.content}</p>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;