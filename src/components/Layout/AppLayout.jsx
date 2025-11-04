import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { LoadingPage } from "../../pages/LoadingPage";

export const AppLayout = ({token})=>{

    const Navigation = useNavigation();    
    if(Navigation.state === "loading") return < LoadingPage />
    
    return(
        <>
            <Header token={token}/>
            <Outlet/>
            <Footer/>
        </>
    )
}