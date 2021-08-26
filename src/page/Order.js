import React, {useContext} from 'react'; 
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import MenuContext from '../context/MenuContext';

export default function Order() {
    const ctx = useContext(MenuContext)
    console.log(ctx)
    return (
        <div>
            <Header/>
            <Menu/>
        </div>
    )
}
