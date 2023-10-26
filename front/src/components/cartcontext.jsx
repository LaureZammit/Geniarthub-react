import { createContext, useContext, useState } from "react";

// Récupérer les données du produit avec un datacontext

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const { cart, setCart } = useContext(CartContext);

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + parseInt(item.quantity), 0);
    };

    return {
        cart,
        setCart,
        getTotalQuantity,
    };
}