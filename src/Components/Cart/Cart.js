import React from 'react';
import { CartStyle } from '../Cart/Cart.style';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../../Actions/CartActions';

export const Cart = (props) => {

    const renderCartItems = (products) => {
        if (products) {
            return products.map((product) => (
                <CartStyle key={product.id} className="col-12 col-lg-3 col-md-4 col-sm-6 px-2 border">
                    <h6>{product.Brand}</h6>
                    <p>{product.Description}</p>
                    <h6>Price: Rs {product.Price}</h6>
                    <h6>Quantity: {product.Quantity}</h6>
                    <button onClick={() => props.removeFromCart(product)}>Remove</button>
                </CartStyle>
            ));
        }
    }

    return (
        <div className="row m-2">
            <div className="col-12 p-2">
                <h6>Cart [{props.cartArray.length}]</h6>
            </div>
            {
                props.cartArray.length > 0 ?
                    <div className="row mx-2">
                        {renderCartItems(props.cartArray)}
                    </div> :
                    <h6 className="mx-2">Cart is Empty. Add Items to Cart</h6>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    cartArray: state.cartItems.cart,
    total: state.cartItems.Total,
});

const mapDispatchToProps = dispatch => ({
    addToCart: bindActionCreators(addToCart, dispatch),
    removeFromCart: bindActionCreators(removeFromCart, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
