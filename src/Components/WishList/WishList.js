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
                {list.length === 0 && <div className='empty'>your wish list is empty :(</div>}

                {renderItems(list)}
            </div>
        </>
    )
}
export default WishList;