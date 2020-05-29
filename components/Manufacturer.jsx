import React from 'react'

export default ({ id, name, country }) => <li key={id}>{`${name} (${country})`}</li>
