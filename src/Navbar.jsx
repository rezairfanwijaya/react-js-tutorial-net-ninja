import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-side">
                <Link to="/" >
                    <h1>Abdas Blog</h1>
                </Link>
            </div>

            <div className="right-side">
                <a href="/">Home</a>
                <Link to="/create" style={{
                    color: "white",
                    borderRadius: "6px"
                }} className="create-blog">
                    Add Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;