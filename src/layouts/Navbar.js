import React from 'react'
import { Link } from 'react-router-dom'
import './layouts.css'

const navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/rankings">Rankings</Link>
        </nav>
    )
}

export default navbar