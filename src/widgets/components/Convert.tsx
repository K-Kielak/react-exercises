import axios from "axios"
import React, { ReactElement, useEffect, useState } from "react"

const TRANSLATE_TIMEOUT = 500

interface ConvertProps {
  text: string
  language: string
}

const Convert = (props: ConvertProps): ReactElement => {
  const [output, setOutput] = useState<string>("")

  const onTextOrLanguageChange = (): (() => void) => {
    const timeoutId = setTimeout(
      translate,
      TRANSLATE_TIMEOUT,
      props.text,
      props.language,
      setOutput,
    )

    return (): void => {
      clearTimeout(timeoutId)
    }
  }
  useEffect(onTextOrLanguageChange, [props.text, props.language])

  return (
    <div>
      <h1 className="ui header">{output}</h1>
    </div>
  )
}

const translate = async (
  text: string,
  language: string,
  callback: (result: string) => void,
): Promise<void> => {
  if (!text) {
    callback("")
    return
  }

  const { data } = await axios.post(
    "https://translation.googleapis.com/language/translate/v2",
    {},
    {
      params: {
        q: text,
        target: language,
        key: process.env.REACT_APP_GAPI_KEY,
      },
    },
  )

  callback(data.data.translations[0].translatedText)
}

export default Convert
