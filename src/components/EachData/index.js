import Item from '../Item'
import './index.css'

const EachData = ({categoryList, titlename}) => (
  <div classNae="main-category">
    <h1>{titlename}</h1>
    <li className="item-container">
      {categoryList.map(e => (
        <Item key={e.id} item={e} />
      ))}
    </li>
  </div>
)

export default EachData
