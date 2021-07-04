import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Link to="/">HOME</Link>
            <Link to="/new">New Post</Link>
        </div>
    )
};

export default Header;