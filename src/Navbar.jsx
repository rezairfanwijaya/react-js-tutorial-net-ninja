import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left-side">
                <h1>Abdas Blog</h1>
            </div>

            <div className="right-side">
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    borderRadius: "6px"
                }} className="create-blog">Add Blog</a> */}
                {/* agar terlihat lebih react kita bisa menggunakan link to 
                instead kita menggunakan a href.
                value dari to bisa dilihat dan diatur pada file app.js
                 */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    borderRadius: "6px"
                }} className="create-blog">Add Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;