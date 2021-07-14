import React from 'react'
import './ResumeItemList.css'

export default function ResumeItemList(props) {
  return(
    <div className="item-list-resume">
      <p>{props.Title}</p>
      <p>{"R$ " + props.Value}</p>
      <p>{props.Percent}</p>
    </div>
  )
}