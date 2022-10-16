import GetData from "./api/GetData";
import Tags from "./Tags";

const CommentList = () => {

    const { Data, ErrorMessage, IsLoading } = GetData('http://localhost:8080/commentar')

    return (
        <>
        <Tags/>
            <div className="home">
                {IsLoading && <div className="loading">Loading....</div>}
                {ErrorMessage && <div className="loading">{ErrorMessage}</div>}
                {Data && Data.map((comment) => (
                    <div className="comment-preview" key={comment.id}>
                        <h2 className="comment-heading">{comment.body}</h2>
                        <p>oleh : {comment.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommentList;