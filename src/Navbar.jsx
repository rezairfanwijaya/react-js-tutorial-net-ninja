const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="left-side">
                <h1>Abdas Blog</h1>
            </div>

            <div className="right-side">
                <a href="/">Home</a>
                <a href="/create">Add Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;