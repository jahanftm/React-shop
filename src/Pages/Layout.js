import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    )
}

export default Layout;