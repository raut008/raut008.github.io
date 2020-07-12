import React from 'react'
import Card from '../../Components/Card/Card'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProductsRequest } from "../../Actions/ProductsActions";
import Loading from '../../Components/Loading/Loading';
import { addToCart } from '../../Actions/CartActions';

const CardList = (props) => {

    React.useEffect(
        () => {
            if (!props.loading && !props.loaded) {
                props.loadProducts();
            }
        },
        [props, props.products]
    );

    const renderProductsCard = (products) => {
        if (products) {
            return products.map((product) => (
                <Card key={product.id} {...product}
                    addProductToCart={() => props.addToCart(product)}
                />
            ));
        }
    }

    console.log(props.products);
    return (
        <>
            <h6 className="m-2">Our Products</h6>
            {
                props.loading ?
                    <div className="row mx-2">
                        {renderProductsCard(props.products)}
                    </div> :
                    <div className="d-flex justify-content-around">
                        <Loading />
                    </div>
            }
        </>
    )
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    loaded: state.products.loaded,
    error: state.products.error,
    products: state.products.products,
    cartArray: state.cartItems.cart,
});

const mapDispatchToProps = dispatch => ({
    loadProducts: bindActionCreators(loadProductsRequest, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardList);