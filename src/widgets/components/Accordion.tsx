import React, { ReactElement, useState } from "react"

interface Item {
  title: string
  content: string
}

interface AccordionProps {
  items: Item[]
}

const Accordion = (props: AccordionProps): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onClick = (index: number): void => {
    return setActiveIndex(index)
  }

  const renderedItems = props.items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={(): void => onClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  )
}

export default Accordion
export type { Item }
