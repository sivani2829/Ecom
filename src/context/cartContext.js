import React from 'react'

const cartContext = React.createContext({
  cartData: [],
  addCart: () => {},
  removeCart: () => {},
})

export default cartContext
