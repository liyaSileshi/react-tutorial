import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'
function Project({ image, title, link }) {
    return (
        <div className='Project'>
            <img src={image} width="300" height="auto" />
            <h3>{title}</h3>
            <Link to={link}>Link to project</Link>
        </div>
    )
}

export default Project;
