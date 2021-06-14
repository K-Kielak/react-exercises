import React, { ReactElement } from "react"

interface Item {
  title: string
  content: string
}

interface AccordionProps {
  items: Item[]
}

const Accordion = (props: AccordionProps): ReactElement => {
  return (
    <div>
      <h1>Accordion</h1>
      <p>Received {props.items.length} items</p>
    </div>
  )
}

export default Accordion
export type { Item }
