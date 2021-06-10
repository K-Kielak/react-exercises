import React, { ReactElement } from "react"

interface CommentProps {
  imgSrc: string
  name: string
  text: string
  date: Date
}

function Comment(props: CommentProps): ReactElement {
  const dateString =
    props.date.toLocaleDateString() + " " + props.date.toLocaleTimeString()
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imgSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{dateString}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  )
}

export default Comment
