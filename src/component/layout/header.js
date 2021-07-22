import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
        <h1>My To Do List</h1>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    );
}

const headerStyle = {
    background: "teal",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    color: "fff",
    textDecoration: "none"
}

export default Header;
