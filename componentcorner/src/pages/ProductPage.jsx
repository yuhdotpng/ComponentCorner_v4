import ProductCard from "../assets/components/ProductCard";

function ProductPage ({products, addToCart}) {
    return (
        <div className="ProductPage">
        <h1>Featured Products</h1>
        {products.map(product =>(
        <ProductCard
          product = {product}
          key = {product.id}
          name = {product.name}
          price = {product.price}
          description = {product.description}
          image = {product.image}
          onAddToCart = {addToCart}
      />
      ))}
      </div>
    )
}

export default ProductPage;