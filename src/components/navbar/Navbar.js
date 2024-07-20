import React from 'react';
import './Navbar.css'
function Navbar({ searchQuery, setSearchQuery }) {

    return (
        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand fw-bold">NEWS 24/7</a>
                <div className="d-flex" role="search">
                    <input className="form-control me-2"
                        type="search" placeholder="Search News"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }} />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar