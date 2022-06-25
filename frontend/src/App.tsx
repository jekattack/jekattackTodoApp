import Map from "./components/map/Map";
import Menu from "./components/controls/Menu";
import React from "react";
import "./App.css";

export default function App(){

    return(
        <div id={"app-container"}>
                <Map />
                <Menu />
        </div>
    )
}