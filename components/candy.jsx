import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div className="form">
      <h1>Candy Makers</h1>
      <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} />
      <div className="greeting">
        {name ? `${name}` : null}
      </div>
    </div>
  )
}
