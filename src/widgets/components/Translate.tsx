import React, { ChangeEvent, ReactElement, useState } from "react"

import Convert from "./Convert"
import Dropdown, { Option } from "./Dropdown"

const languageOptions: Option[] = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindu",
    value: "hi",
  },
]

const Translate = (): ReactElement => {
  const [text, setText] = useState<string>("")
  const [language, setLanguage] = useState<Option>(languageOptions[0])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={onInputChange} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={languageOptions}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language.value} />
    </div>
  )
}

export default Translate
