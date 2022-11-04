import React, {useContext, useEffect, useState} from 'react';
import './wish-list.scss';
import WishListContext from "./WishListContext";


const WishList = ()=>{


    const [list, setList] = useState([]);


    const wishItems = useContext(WishListContext).wishList;

    useEffect(()=> {
        if(wishItems) {
            setList(wishItems);
        }
    }, [wishItems]);



    const renderItems = items => {
        console.log(items)
        return items.map( (item, i) => {
            return (
                <>
                    <div className='wish-item' key={item.productId}>
                        <img src={item?.image} alt="product"/>
                        <div className="title">{item?.title}</div>
                    </div>
                </>
            );
        })
    }

    return(
        <>
            <div className='wish-wrapper'>
                {renderItems(list)}
            </div>
        </>
    )
}
export default WishList;