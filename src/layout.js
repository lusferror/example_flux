import { BrowserRouter , Route , Routes } from "react-router-dom";
import App from "./page/App";
import injectContext from "./store/appContext";

const Layout = ({miVariable, miVector}) => {
    return(

        <BrowserRouter>
            <Routes>
                <Route element={<App miVariable={miVariable} miVector={miVector}/>} path='/' />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout)