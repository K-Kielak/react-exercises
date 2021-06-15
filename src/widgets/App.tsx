import React, { ReactElement, useState } from "react"

import Accordion, { Item } from "./components/Accordion"
import Dropdown, { Option } from "./components/Dropdown"
import Search from "./components/Search"
import Translate from "./components/Translate"

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

const colorOptions: Option[] = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
]

const App = (): ReactElement => {
  const [selected, setSelected] = useState<Option>(colorOptions[0])

  return (
    <div>
      <Translate />
    </div>
  )
}

export default App
