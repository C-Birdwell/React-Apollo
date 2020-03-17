import React from 'react'

export const Button = ({ onClick, text }) => (
  <div className="button" onClick={onClick}>
    <p>{text}</p>
  </div>
)
