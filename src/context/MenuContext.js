import React, { createContext, useState, useEffect} from "react"
import data from "../../menu-data.json"

const MenuContext = createContext({
    menu: data
})

export function MenuContextProvider(props){
    const [menu, setMenu] = useState(data)

    const context ={menu, setMenu}

    return <MenuContext.Provider value ={context}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuContext;