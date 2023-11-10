import {Component} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductData from './components/ProductData'
import cartContext from './context/cartContext'

class App extends Component {
  state = {cartData: []}

  addCart = product => {
    const {cartData} = this.state
    // const isAdd = cartData.filter(e => e.name.inncludes(product))
    // console.log('check', isAdd)
    this.setState(prev => ({cartData: [...prev.cartData, product]}))
  }

  removeCart = () => {
    const {cartData} = this.state
  }

  render() {
    const {cartData} = this.state
    return (
      <cartContext.Provider value={{cartData, addCart: this.addCart}}>
        <div>
          <Navbar />
          <ProductData />
        </div>
      </cartContext.Provider>
    )
  }
}

export default App
