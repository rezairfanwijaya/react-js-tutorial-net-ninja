import GetData from "./api/GetData";
import Tags from "./Tags";

const BlogDetail = (props) => {
    const { Data, IsLoading, ErrorMessage } = GetData(`http://localhost:8080/blogs/${props.match.params.id}`)

    return (<>
        <Tags />
        <div className="home">
            {IsLoading && <div className="loading">Loading....</div>}
            {ErrorMessage && <div className="loading">{ErrorMessage}</div>}
            {Data && <div className="blog-preview" key={Data.id}>
                <h2 className="blog-heading" style={{ textAlign: "center" }}>{Data.title}</h2>
                <p>by : {Data.author}</p>
                <p>{Data.body}</p>
            </div>}
        </div>
    </>);
}

export default BlogDetail;