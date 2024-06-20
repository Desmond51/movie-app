import React, { useState } from "react";
// import Cart from "./components/sharingComponentState/Cart";
// import Navbar from "./components/sharingComponentState/Navbar";

function App() {
 const [meals, setMeals] = useState(["Cornchaff", "Fried rice", "Ndole"])
 //Sharing state between component Product state

 const[cartItems, setCartItems] =useState(['Product1', 'Product2'])
  // Updating objects
  const [drink, setDrink] = useState({
    title: "Bear",
    price: 7,
  });
  // updating a player
  const [game, setGame] = useState({
    id: 1,
    player:{
      name: 'John'
    },
  })
  //updating the 

  const handleClickPlayer=()=>{
    setGame({...game, player:{...game.player, name:'Desmond'}})
  }
  const handleUpdateMeal = ()=>{
    setMeals(...meals, "Beand and rice")
  }
console.log(handleUpdateMeal)
  const handleClick = () => {
    setDrink({ ...drink, price:8 });
  };
//
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>click</button>

      <div>
        {/* // <Navbar cartItemsCount={cartItems.length} /> */}
        {/* <Cart cartItems={cartItems} onClear={setCartItems([])} /> */}
        <div>
          {game.}
        </div>
      </div>
    </div>
  );
}
export default App;
