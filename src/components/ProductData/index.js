import {Component} from 'react'
import CategoryList from '../CategoryList'
import EachData from '../EachData'
import './index.css'

class ProductData extends Component {
  state = {productdata: [], cartlength: 0, isClick: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const res = await fetch(url)
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      this.setState({title: data.title, productdata: data.categories})
    }
  }

  render() {
    const {productdata} = this.state
    console.log('pro', productdata)

    return (
      <div className="product-cont">
        <div className="products-categoy">
          <ul className="products-categoy1">
            {productdata.map(each => (
              <CategoryList name={each.name} />
            ))}
          </ul>
          <ul className="each-category">
            {productdata.map(e => (
              <EachData categoryList={e.products} titlename={e.name} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default ProductData
