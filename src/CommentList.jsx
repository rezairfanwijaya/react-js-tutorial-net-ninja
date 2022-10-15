const CommentList = ({ commentDatas, titleSection }) => {
    return (
        <>

            <h2 className="comment-heading">{titleSection}</h2>
            {commentDatas.map((comment) => (
                <div className="comment-preview" id={comment.id}>
                    <h2>{ comment.body }</h2>
                    <p>By : { comment.email }</p>
                </div>
            ))}

        </>
    );
}

export default CommentList;