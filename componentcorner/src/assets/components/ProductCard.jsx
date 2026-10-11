import './ProductCard.css';
function ProductCard({ name, price, description, image, onAddToCart, product}) {

  return (
    <div className="product-card">
      <img src={image} alt={name} />
        <div className="container">
          <h3>{name}</h3>
          <p className='description'> {description}</p>
          <p className='price'>${price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;