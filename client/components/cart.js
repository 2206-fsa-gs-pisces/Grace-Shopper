import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart } from '../store/cart';

//this is Mark's id in my seed file for some reason
const id = 11;
export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(id);
  }

  render() {
    let { cart } = this.props;
    return (
      <div>
        <h1>Cart</h1>
        <div id="cartItems">
          {cart.map(item => {
            console.log(item);
            return (
              <div className="cartItems" key={item.id}>
                <Link to={`/cart/${item.id}`}>
                  {item.name}
                  <img height="100vh" width="100vh" src={item.imageUrl} />
                </Link>
                <div>
                  <h3>Total Price: ${item.totalPriceAtSaleTime / 100}</h3>
                  <h3>Quantity: {item.qty}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <button>
          <Link to="/checkout">CHECKOUT</Link>
        </button>
      </div>
    );
  }
}
const mapState = state => {
  return {
    cart: state.cart,
  };
};
const mapDispatch = dispatch => {
  return {
    getCart: id => dispatch(fetchCart(id)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
