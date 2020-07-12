import React from 'react';
import { CartStyle, ImageTransform, CartContainer } from '../Cart/Cart.style';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../../Actions/CartActions';
import Image from "../../Images/Image.jpg";
//import { CardStyle } from '../Card/Card.style';
export const Cart = (props) => {

    const renderCartItems = (products) => {
        if (products) {
            return products.map((product) => (
                <CartStyle key={product.id} className="col-12 px-0 m-2">
                    <ImageTransform >
                        <img src={Image} alt="Product" height="100px" width="100px" />
                    </ImageTransform>
                    <h6 className="m-0">{product.Brand}</h6>
                    <p className="m-0">{product.Description}</p>
                    <h6 className="m-0">Price: Rs {product.Price}</h6>
                    <h6 className="m-0">Quantity: {product.Quantity}</h6>
                    <button onClick={() => props.removeFromCart(product)}>Remove</button>
                </CartStyle>
            ));
        }
    }

    return (
        <CartContainer>
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
        </CartContainer>
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
