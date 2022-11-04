import {useParams} from "react-router-dom";
import './product-details.scss'
import {allProducts} from "../../Data/product-details";
import WishListContext from "../../Components/WishList/WishListContext";
import {useContext, useEffect, useState} from "react";

const ProductDetails = () => {
    const [product, setProduct] = useState(undefined);

    const params = useParams();

    const findProduct = allProducts.find(i => i.productId === Number(params.id));

    const { setWishList } = useContext(WishListContext);
    const {wishList} = useContext(WishListContext);

    const addToWishList = () => {
        const i = wishList.find((item) => item.productId === findProduct.productId);
        if(!i) {
            setWishList([...wishList,findProduct]);
        }
    };

    useEffect(() => {
        setProduct(findProduct);
    }, []);



    return (
        <>
            {/*the style of this page will be changed based on the category (kids, women, men)*/}

            <div className="wrapper">
                <div className={`product-info ${product?.category?.toLowerCase()}`}>
                    <img
                        src={product?.image}
                        alt="product"/>
                    <div className="description">
                        <div className={`title ${product?.category?.toLowerCase()}`}>{product?.title}</div>
                        <div className="price">
                            <div>{product?.price}</div>
                            <button
                                onClick={addToWishList}
                                className={`${product?.category?.toLowerCase()}`
                                }>save to wish list
                            </button>
                        </div>
                        <div>
                            <h3>product details</h3>
                            <ul>
                                {product?.details?.map((item, i) => <li key={i}>{item.item}</li>)}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="more-info">
                    VIOLET is a global e-commerce luxury fashion company, with headquarters in Munich, Germany. Founded
                    in 2022, it operates local-language based websites for international markets in English, German,
                    Spanish, French, Italian, Arabic, Chinese and Korean.
                </div>
            </div>

        </>
    )
}

export default ProductDetails;