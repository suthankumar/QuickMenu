import React, {useContext} from 'react'; 
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import { Link } from "react-router-dom";


export default function Order() {
    return (
        <div  className ="h-screen">
            <Header/>
            <Menu/>
        </div>
    )
}
