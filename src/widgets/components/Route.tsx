import React, { ReactElement, ReactNode } from "react"

interface RouteProps {
  pathname: string
  children: ReactNode
}

const Route = (props: RouteProps): ReactElement | null => {
  if (window.location.pathname === props.pathname) {
    return <div>{props.children}</div>
  }

  return null
}

export default Route
