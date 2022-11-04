import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import NoPage from "./Pages/NoPage/NoPage";
import {WishListContextProvider} from "./Components/WishList/WishListContext";
import {useState} from "react";

function App() {
    const [wishList, setWishList] = useState([]);

    return (
        <WishListContextProvider value={{wishList, setWishList}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="pd/:id" element={<ProductDetails/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </WishListContextProvider>
    );
}

export default App;
