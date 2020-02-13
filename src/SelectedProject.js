import React from 'react'
import data from './data'
import { Link, useParams } from 'react-router-dom'

function SelectedProject(props) {
  const { index } = useParams() //gives you the index of the data from the url
  const place = data[index] //gives the data on that given index
  return (
    <div className='project'>
      <img alt="" src={place.image} width="600" height="400" />
      <h3>{place.title}</h3>
      <p>{place.desc}</p>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default SelectedProject