import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function AppContainer() {
    return <div className="app-container">
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
    </div>
}

export default AppContainer