import React, { useState } from 'react'

function BackButton() {
  const [drink, setDrink] = useState({
    title: "Bear",
    price: 7,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 8 })
  }

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>click</button>

    </div>
  )
}
export default BackButton