import React from 'react'
import Card from '../../Components/Card/Card'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProductsRequest } from "../../Actions/ProductsActions";
import Loading from '../../Components/Loading/Loading';
import { addToCart } from '../../Actions/CartActions';
import Dropdown from "../../Components/Dropdown/Dropdown";
import { handleCategoryChange } from '../../Actions/DropDownActions';

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
        if (products && props.dropdownCategory === "Show All") {
            return products.map((product) => (
                <Card key={product.id} {...product}
                    addProductToCart={() => props.addToCart(product)}
                    filterCategory={props.dropdownCategory}
                />
            ));
        }
        else {
            return FilterList.map((product) =>
                <Card key={product.id} {...product}
                    addProductToCart={() => props.addToCart(product)}
                    filterCategory={props.dropdownCategory}
                />
            )
        }
    }

    let UniqueCategoryArr = [];
    const FilterUniqueCategory = (products) => {
        let CategoryArr = [];
        products.forEach(item => {
            CategoryArr.push(item.Category);
        });
        UniqueCategoryArr = [...new Set(CategoryArr)];
        UniqueCategoryArr.push("Show All");
    }
    FilterUniqueCategory(props.products);

    const FilterList = props.products.filter(item => {
        return item.Category === props.dropdownCategory;
    }
    )

    return (
        <>
            <div className="mx-2 float-right">
                <Dropdown options={UniqueCategoryArr} change={props.handleCategoryChange} />
            </div>

            <h6 className="m-2">Our Products</h6>
            {
                props.loaded ?
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
    dropdownCategory: state.dropdown.category

});

const mapDispatchToProps = dispatch => ({
    loadProducts: bindActionCreators(loadProductsRequest, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),
    handleCategoryChange: bindActionCreators(handleCategoryChange, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardList);