import React, { ReactElement } from "react"

import Accordion, { Item } from "./Accordion"
import Search from "./Search"

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
      <Search />
    </div>
  )
}

export default App
