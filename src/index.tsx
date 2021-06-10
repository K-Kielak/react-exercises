import React, { ReactElement } from "react"
import ReactDOM from "react-dom"
import faker from "faker"

import ApprovalCard from "./ApprovalCard"
import Comment from "./Comment"

function App(): ReactElement {
  return (
    <div className="ui container comments">
      <Comment
        imgSrc={faker.image.avatar()}
        name={faker.name.firstName()}
        text="Test1"
        date={faker.date.recent()}
      />
      <Comment
        imgSrc={faker.image.avatar()}
        name={faker.name.firstName()}
        text="Test2"
        date={faker.date.recent()}
      />
      <ApprovalCard>
        <Comment
          imgSrc={faker.image.avatar()}
          name={faker.name.firstName()}
          text="Test3"
          date={faker.date.recent()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
