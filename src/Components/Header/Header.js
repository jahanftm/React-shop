import './header.scss';
import WishList from "../WishList/WishList";
import {useContext, useState} from "react";
import WishListContext from "../WishList/WishListContext";

const Header = () => {
    const [wishItems, setWishItems] = useState(false);

    const items = useContext(WishListContext).wishList;

    function toggle () {
        if(!wishItems) setWishItems(true);
        else setWishItems(false);
    }

    return (
        <header>
            <div>VIOLET</div>
            <div className="wish-list" onClick={toggle}>
                {items.length > 0 && <div className='items'>{items.length}</div>}
                {wishItems && <WishList></WishList>}
            </div>
        </header>
    )
}

export default Header;