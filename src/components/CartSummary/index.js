// Write your code here
// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      )
      const totalUniqueItems = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="total-amount">Rs {totalPrice}/-</span>
          </h1>
          <p className="total-items">{totalUniqueItems} items in cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
