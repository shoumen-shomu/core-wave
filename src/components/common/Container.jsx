import React from 'react'

const Container = ({className,chlidren}) => {
  return (
    <div className={`max-w-330 w-full mx-auto ${className}`}>{chlidren}</div>
  )
}

export default Container