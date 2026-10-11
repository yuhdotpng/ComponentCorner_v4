import './CartItem.css'

function CartItem({name, price, onRemoveFromCart, itemIndex}) {

    return(

        <div className="item-card">
            <p className='name'>{name}</p>
            <p className='cart-price'>{price}</p>
            <button className='remove-btn' onClick={() => onRemoveFromCart(itemIndex)}> Remove </button>
            <hr></hr>
        </div>
    );
}

export default CartItem;