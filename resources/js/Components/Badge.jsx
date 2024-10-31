import React from 'react'

export default function Badge({children,color="gray"}) {
  return (
    <span className={`inline-flex items-center mr-1 rounded-md bg-${color}-500 px-2 py-1 text-xs font-medium text-white ring-inset `}>
    {children}
  </span>
  )
}
