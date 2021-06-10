import React, { ReactElement } from "react"

interface ApprovalCardProps {
  children: React.ReactNode
}

function ApprovalCard(props: ApprovalCardProps): ReactElement {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  )
}

export default ApprovalCard
