import { ShopContext } from "../Context/ShopContext"
import { useContext,useEffect } from "react"
const Cart = () => {
  const contextValue = useContext(ShopContext)
  useEffect(()=>{
    console.log(contextValue)
  },[])
  return (
    <div>Cart</div>
  )
}

export default Cart