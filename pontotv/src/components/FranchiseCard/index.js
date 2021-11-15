import React from 'react'

const FranchiseCard = ({ name, email, phone }) => {
  return (
    <div style={{ padding: '8px', margin: '16px 0', color: 'white' }}>
      <p>{name}</p>
      <p>{email}</p>
      <p style={{ fontWeight: 'bold' }}>{phone}</p>
    </div>
  )
}

export default FranchiseCard