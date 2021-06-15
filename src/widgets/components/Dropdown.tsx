import React, { ReactElement, useEffect, useRef, useState } from "react"

interface Option {
  label: string
  value: string
}

interface DropdownProps {
  selected: Option
  onSelectedChange: (newSelected: Option) => void
  options: Option[]
}

const Dropdown = (props: DropdownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)

  const onBodyClick = (event: MouseEvent): void => {
    if (ref.current?.contains(event.target as Node)) {
      return
    }

    setIsOpen(false)
  }
  useEffect(() => {
    document.body.addEventListener("click", onBodyClick)
    return (): void => {
      document.body.removeEventListener("click", onBodyClick)
    }
  }, [])

  const renderedOptions = props.options
    .filter((option): boolean => {
      return option.value !== props.selected.value
    })
    .map((option: Option): ReactElement => {
      const onOptionClick = (): void => {
        props.onSelectedChange(option)
      }

      return (
        <div key={option.value} className="item" onClick={onOptionClick}>
          {option.label}
        </div>
      )
    })

  const onSelectionClick = (): void => {
    setIsOpen(!isOpen)
  }

  const dropdownVisible = isOpen ? "visible active" : ""
  const menuVisible = isOpen ? "visible transition" : ""
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={onSelectionClick}
          className={`ui selection dropdown ${dropdownVisible}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${menuVisible}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
export type { Option }
