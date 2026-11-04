import React from 'react'

const Child = ({increaseCount}) => {
// const Child = ({count}) => {
    console.log("Child re-render!");
  return (
    <div>
        <button onClick={increaseCount}>Child Click</button>
    </div>
  )
}

export default React.memo(Child);