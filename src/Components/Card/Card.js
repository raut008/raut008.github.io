import React from 'react'
import { CardStyle } from './Card.style';

export const Card = ({ id, Brand, Description, Price, addProductToCart }) => {

    const [buttonState, setButtonState] = React.useState(true);
    return (
        <CardStyle className="col-12 col-lg-3 col-md-4 col-sm-6 px-2 border">
            <h6>{Brand}</h6>
            <p>{Description}</p>
            <h6>Price: Rs {Price}</h6>
            {
                buttonState ?
                    <button
                        onClick={(e) => {
                            addProductToCart({ id, Brand, Description, Price });
                            setButtonState(false)
                        }}>Add</button>
                    :
                    <h6>Added To Cart</h6>
            }
        </CardStyle>
    )
}

export default Card;
