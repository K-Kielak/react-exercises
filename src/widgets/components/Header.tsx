import React, { ReactElement } from "react"

import InternalLink from "./InternalLink"

const Header = (): ReactElement => {
  return (
    <div className="ui secondary pointing menu">
      <InternalLink href="/" className="item">
        Accordion
      </InternalLink>
      <InternalLink href="/list" className="item">
        List
      </InternalLink>
      <InternalLink href="/dropdown" className="item">
        Dropdown
      </InternalLink>
      <InternalLink href="/translate" className="item">
        Translate
      </InternalLink>
    </div>
  )
}

export default Header
