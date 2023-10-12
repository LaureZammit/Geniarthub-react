import { Footer } from "../components/footer"
import { Header } from "../components/header"

import '../styles/base.css'
import '../styles/cart.css'

function Cart() {
    document.body.classList.add('page')
    
    return(
        <>
            <Header />

            <Footer />
        </>
    )
}

export default Cart