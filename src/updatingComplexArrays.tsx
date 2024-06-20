import React, { useState } from 'react'

function updatingComplexArrays() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bugs, setBugs] =useState([
        {id:1, title: "Bug 1", fixed: false},
        { id: 2, title: "Bug 2", fixed: false }
    ])

    const handleUpdate =()=>{
        setBugs(bugs.map(bug=>bug.id===1 ? {...bug, fixed: true} : bug))
    }
  return (
    <div>
        <button onClick={handleUpdate}>click</button>
    </div>
  )
}

export default updatingComplexArrays