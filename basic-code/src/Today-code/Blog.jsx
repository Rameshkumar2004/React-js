import React from 'react'
import './Blog.css'

const Blog = (props) => {
  return (
    <div className='Blog'>
        <img src={props.image} />
      <h3>My name is {props.name}</h3>
      <h5>My age is 21</h5>
    </div>
  )
}

export default Blog
