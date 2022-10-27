import GetData from "./api/GetData";
import Tags from "./Tags";
import { Link } from "react-router-dom";

const UserList = () => {
    const { Data, ErrorMessage, IsLoading } = GetData('http://localhost:8080/users')
    return (
        <>
            <Tags />
            <div className="home">
                {IsLoading && <div className="loading">Loading....</div>}
                {ErrorMessage && <div className="loading">{ErrorMessage}</div>}
                {Data && Data.map((user) => (
                    <div className="comment-preview" key={user.id}>
                        <h2 className="comment-heading">{user.name}</h2>
                        <p>email : {user.email}</p>
                        <Link to={`/user/detail/${user.id}`}>
                            <div className="link">
                                Detail
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserList;