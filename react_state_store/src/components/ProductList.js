import Product from "./Product"

export default function ProductList (props) {
  return (
    <ul>
      <Product product={props.products[0]} />
    </ul>
  )
}