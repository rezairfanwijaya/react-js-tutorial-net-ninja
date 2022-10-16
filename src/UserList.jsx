import GetData from "./api/GetData";
import Tags from "./Tags";

const UserList = () => {
    const { Data, ErrorMessage, IsLoading } = GetData('http://localhost:8080/users')
    console.log(Data)
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
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserList;