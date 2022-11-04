import { Link } from "react-router-dom";

const Tags = () => {
    return ( 
        <div className="tag">
            <Link to="/commentar" className="commentar">Commentar</Link>
            <Link to="/user" className="user">Users</Link>
            <Link to="/blogs" className="user">Blogs</Link>
        </div>
     );
}
 
export default Tags;