import './index.css'
import cartContext from '../../context/cartContext'

// const Navbar = () => (
//   <div className="nav-container">
//     <h1>E-commerce</h1>
//     <div className="cart-button">cart:0</div>
//   </div>
// )
// export default Navbar

const Navbar = () => (
  <cartContext.Consumer>
    {value => {
      const {cartData} = value
      return (
        <div className="nav-container">
          <h1>E-commerce</h1>
          <div className="cart-button">cart:{cartData.length}</div>
        </div>
      )
    }}
  </cartContext.Consumer>
)
export default Navbar
