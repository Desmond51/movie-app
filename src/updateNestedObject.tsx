import React, { useState } from 'react'

export default function updateNestedObject() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [customer, setCustomer] = useState({
        name: "John",
        address:{
            city: "Buea",
            zipCode: 90249,
        }
    })
    const handleUpdate= ()=>{
        setCustomer({
            ...customer, 
            address:{...customer.address, city:"Limbe"}
        })
    }
  return (
    <div>
        <button onClick={handleUpdate}></button>
    </div>
  )
}
