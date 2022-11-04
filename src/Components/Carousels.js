import React from "react";
import { Carousel } from "react-responsive-carousel";
import {useNavigate} from "react-router-dom";

const Carousels = (props)=>{

    const navigate = useNavigate();

    return (
        <Carousel autoPlay infiniteLoop={true}>

            {props.imageUrls.map(item => <div key={item} onClick={() => navigate(`/pd/${item.productId}`) }>
                <img alt="product" src={item.url} />
            </div>)}

        </Carousel>
    );
}

export default Carousels;
