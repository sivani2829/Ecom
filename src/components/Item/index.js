import cartContext from '../../context/cartContext'
import './index.css'

const Item = ({item}) => (
  <cartContext.Consumer>
    {value => {
      const {addCart} = value
      const {image, name, price, weight} = item
      const add = () => {
        addCart(name)
      }
      return (
        <div className="item-cont">
          <div className="image-button">
            <img src={image} className="image-cls" />
            <button className="plus-icon" onClick={add}>
              +
            </button>
          </div>
          <p>{weight}</p>
          <p>{price}</p>
        </div>
      )
    }}
  </cartContext.Consumer>
)
export default Item
