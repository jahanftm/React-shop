import React from 'react';
import './home.scss'
import Carousels from "../../Components/Carousels";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {dataItems} from "../../Data/data-items";
import {useNavigate} from "react-router-dom";


const Home = () => {
    let itemsSlider = dataItems;

    const navigate = useNavigate();

    return (
        <>
            <div className='home-body'>
                {itemsSlider.map(item => <div className='items' key={item.id} >
                    <Carousels name={item.name} imageUrls={item.imageUrls} />
                    <div className='description'><h2>{item.name}</h2><div>{item.description}</div></div>
                </div>)}
            </div>
        </>
    )
}
export default Home;