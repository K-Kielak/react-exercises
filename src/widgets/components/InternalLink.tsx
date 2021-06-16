import React, { ReactElement, ReactNode } from "react"

interface LinkProps {
  href: string
  className: string
  children: ReactNode
}

const InternalLink = (props: LinkProps): ReactElement => {
  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void => {
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault()
    window.history.pushState({}, "", props.href)

    const navEvent = new PopStateEvent("popstate")
    window.dispatchEvent(navEvent)
  }

  return (
    <a className={props.className} href={props.href} onClick={onClick}>
      {props.children}
    </a>
  )
}

export default InternalLink
