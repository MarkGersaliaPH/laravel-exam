import React from 'react'

export default function Badge({children,color="blue"}) {
  return (
    <span className={`inline-flex items-center  rounded-md bg-${color}-500 px-2 py-1 text-xs font-medium text-white ring-inset `}>
    {children}
  </span>
  )
}
