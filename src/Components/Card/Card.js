import React from 'react'
import { CardStyle } from './Card.style';
import Image from "../../Images/Image.jpg";

export const Card = ({ id, Brand, Description, Price, Name, Category, addProductToCart }) => {

    const [buttonState, setButtonState] = React.useState(true);
    return (
        <CardStyle className="col-12 col-lg-3 col-md-4 col-sm-6 px-2 border">
            <img src={Image} alt="Product" height="175px" width="175px" />
            <h6 className="m-0">{Brand} {Name}</h6>
            <h6 className="m-0">{Category}</h6>
            <p className="d-none d-sm-block m-0">{Description}</p>
            <h6 className="m-0">Price: Rs {Price}</h6>
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
