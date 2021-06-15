import React, { ReactElement, useState } from "react"

import Accordion, { Item } from "./Accordion"
import Dropdown, { Option } from "./Dropdown"
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

const options: Option[] = [
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
  const [selected, setSelected] = useState<Option>(options[0])

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}

export default App
