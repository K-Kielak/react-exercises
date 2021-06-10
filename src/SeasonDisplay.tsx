import React, { ReactElement } from "react"

interface SeasonDisplayProps {
  lattitude: number
}

function SeasonDisplay(props: SeasonDisplayProps): ReactElement {
  const season = getSeason(props.lattitude, new Date().getMonth())

  return <div>Season: {season.toString()}</div>
}

enum Season {
  Summer = "summer",
  Winter = "winter",
}

function getSeason(lattitude: number, month: number): Season {
  if (month > 2 && month < 9) {
    return lattitude > 0 ? Season.Summer : Season.Winter
  } else {
    return lattitude > 0 ? Season.Winter : Season.Summer
  }
}

export default SeasonDisplay
