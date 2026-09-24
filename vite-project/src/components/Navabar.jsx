import { useState } from "react";

import {
    FiMenu,
    FiX,
    FiSearch,
    FiUser,
    FiPlus
} from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        navigate(
            `/browse-gigs?search=${encodeURIComponent(
                searchQuery.trim()
            )}`
        );

        setSearchOpen(false);
    };

    return (
        <header className="navbar">

            <div className="navbar-inner">

                <Link to="/" className="navbar-logo">
                    Skill<span>Bridge</span>
                </Link>

                <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

                    <Link to="/browse-gigs">
                        Browse Gigs
                    </Link>

                    <Link to="/find-work">
                        Find Work
                    </Link>

                  <a
                        href="#categories"
                        onClick={() => setMenuOpen(false)}
                    >
                        Categories
                    </a>

                    <a
                        href="#how-it-works"
                        onClick={() => setMenuOpen(false)}
                    >
                        How It Works
                    </a>
                                    <Link to="/ai-tools">
                        AI Tools
                    </Link>

                    <div className="mobile-actions">

                        <Link className="mobile-login" to="/login">
                            <FiUser />
                            Login
                        </Link>


                        <Link className="mobile-start" to="/register">
                            <FiPlus />
                            Start Selling
                        </Link>

                    </div>

                </nav>

               <div className="navbar-actions">

    <button
    className="navbar-search"
    onClick={() => setSearchOpen(!searchOpen)}
    aria-label="Search"
>
    <FiSearch />
</button>

   {searchOpen && (
    <form
        className="navbar-search-box"
        onSubmit={handleSearch}
    >
        <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
        />
    </form>
)}

    <Link
        to="/login"
        className="navbar-login"
    >
        Login
    </Link>

    <Link
        to="/register"
        className="navbar-start"
    >
        Start Selling
    </Link>

</div>

                <button
                    className="navbar-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

            </div>

        </header>
    );
}

export default Navbar;

