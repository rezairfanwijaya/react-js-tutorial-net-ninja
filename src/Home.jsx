import { useState, useEffect } from "react";
import CommentList from "./CommentList";

const Home = () => {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/data')
            .then(res => { return res.json() })
            .then(data => setComments(data))
    }, [])

    return (
        <div className="home">
            {comments && <CommentList
                commentDatas={comments}
                titleSection="All Comments"
            />}
        </div>
    );
}

export default Home;