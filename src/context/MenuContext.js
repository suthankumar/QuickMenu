import React, { createContext, useState} from "react"
import data from "../../menu-data.json"

const MenuContext = createContext({
    menu: data
})

export function MenuContextProvider(props){
    const [menu, setMenu] = useState(data)
    console.log("Context started....")

    const updateOrder=()=>{

    }

    const context ={menu, setMenu}

    return <MenuContext.Provider value ={context}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuContext;