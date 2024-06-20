import React, { useState } from 'react'

function updatingArray() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tags, setTags] = useState(["mango", "plum"])

   const handleUpdate=()=>{
    // adding elemrnt to the array
    setTags([...tags, "Orange"])
    // Updating an array
    setTags(tags.map(tag=>tag==="mango" ? "grape" : tag))
    // Removing an element 
    setTags(tags.filter(tag=>tag !== "plum"))
    }
  return (
    <div>
        <button onClick={handleUpdate}>
            click
        </button>
    </div>
  )
}

export default updatingArray