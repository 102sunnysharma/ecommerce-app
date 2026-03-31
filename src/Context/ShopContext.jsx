import React, {createContext,useState} from "react";
import all_product from "../assets/all_product"


export const ShopContext = createContext(null);
const getdefaultcart = () => {
        let cart = {};
        for (let index = 0; index < all_product.length+1;index++){
            cart[index] = 0
        }  
        return cart;
    }


const ShopContextProvider = (props) => {
    const [cartItems, setCartIems] = useState(getdefaultcart())

    const addTocart = (itemId) => {
        setCartIems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        
        
    };

    const removeFromCart = (itemId) => {
        setCartIems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    };

    const contextValue= {all_product, cartItems,addTocart, removeFromCart};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider