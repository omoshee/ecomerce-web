import { ShopContext } from '../Context/ShopContext'
import { useContext, useEffect } from 'react'
import './CSS/ShopCategory.css'
import drpdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'



const ShopCategory = (props) => {
  const contextValue=useContext(ShopContext)
  // useEffect(()=>{
  //   console.log(contextValue)
  // },[])
  // console.log(contextValue)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span> out of 36 products
        </p> 
        <div className="shopcatgory-sort">
          Sort by <img src={drpdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          contextValue.map((item,i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              
            }
            else
            {
              return null
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory