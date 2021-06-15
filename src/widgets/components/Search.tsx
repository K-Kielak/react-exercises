import React, { ChangeEvent, ReactElement, useState, useEffect } from "react"
import axios from "axios"

const QUERY_TIMEOUT = 500

const Search = (): ReactElement => {
  const [term, setTerm] = useState<string>("")
  // Set wiki results to `any` type because creating interface for wikipedia API is not worth just for simple exercises
  const [results, setResults] = useState<any[]>([])

  const onTermRerender = (): (() => void) => {
    const timeoutId = setTimeout(
      queryWikipedia,
      QUERY_TIMEOUT,
      term,
      setResults,
    )

    return (): void => {
      clearTimeout(timeoutId)
    }
  }
  useEffect(onTermRerender, [term])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value)
  }

  const renderedResults = results.map((result): ReactElement => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input value={term} onChange={onInputChange} className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}

const queryWikipedia = async (
  term: string,
  callback: (data: any[]) => void,
): Promise<void> => {
  if (!term) {
    callback([])
    return
  }

  const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    params: {
      action: "query",
      list: "search",
      origin: "*",
      format: "json",
      srsearch: term,
    },
  })
  callback(data.query.search)
}

export default Search
