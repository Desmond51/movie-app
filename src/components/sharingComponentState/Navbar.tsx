import React from 'react'

interface Props{
    cartItemsCount: number
}
const Navbar = ({cartItemsCount}:Props) => {
  return (
    <div>
        <p>{cartItemsCount}</p>
    </div>
  )
}

export default Navbar