import React from 'react'

const Badge = ({text}) => {
  return (
    <div className="badge badge-xs badge-primary p-2 badge-outline absolute bottom-2 left-3">
      {text}
    </div>
  )
}

export default Badge