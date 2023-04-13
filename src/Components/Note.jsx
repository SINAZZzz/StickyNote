import React from 'react'

export default function Note(props) {
  return (
    <li>
        <a href="#">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </a>
    </li>
  )
}
