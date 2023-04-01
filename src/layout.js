import { BrowserRouter , Route , Routes } from "react-router-dom";
import App from "./page/App";
import injectContext from "./store/appContext";

const Layout = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path='/' />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout)