import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "../screens/main/Main";
import Register from "../screens/clickList/ClickList"


const Router = () => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/list" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;