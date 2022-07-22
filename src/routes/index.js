import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import Home from "../pages/Home";
import Singin from "../pages/Singin";
import Singup from "../pages/Singup";

const Private = ({Item}) => {
    const { signed } = useAuth(); 
    return signed > 0 ? <Item /> : <Singin/>
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<Private Item={Home}/>} />
                    <Route path='/' element={<Singin/>} />
                    <Route path='/singup' element={<Singup/>} />
                    <Route path='*' element={<Singup/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;
