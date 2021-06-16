import React, { ReactElement, ReactNode, useState } from "react"
import { useEffect } from "react"

interface RouteProps {
  pathname: string
  children: ReactNode
}

const Route = (props: RouteProps): ReactElement | null => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = (): void => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("popstate", onLocationChange)

    return (): void => {
      window.removeEventListener("popstate", onLocationChange)
    }
  }, [])

  if (currentPath === props.pathname) {
    return <div>{props.children}</div>
  }

  return null
}

export default Route
