import React from 'react'

function Arrow({ customClass }) {
  return (
    <div>
        <div className={`w-[48px] h-[48px]  rounded-full flex items-center justify-center ${customClass}`}>
        <i className="far fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Arrow