import React from 'react'

const Loader = () => {
  return (
    <div className="flex w-1/2 flex-col gap-4 item-center mx-auto">
    <div className="flex items-center gap-4">
      <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    <div className="skeleton h-32 w-full"></div>
  </div>
  )
}


export default Loader