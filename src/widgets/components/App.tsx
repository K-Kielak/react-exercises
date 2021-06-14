import React, { ReactElement } from "react"

import Accordion, { Item } from "./Accordion"

const items: Item[] = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
]

const App = (): ReactElement => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
