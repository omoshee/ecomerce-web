import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform where businesses sell products or services to customers over the internet. 
                These websites facilitate transactions electronically, allowing customers to browse through products, 
                add items to their virtual shopping carts, and make purchases using various payment methods such as credit cards, 
                digital wallets, or bank transfers. E-commerce websites often include features such as product catalogs, 
                search functionality, secure payment gateways, and order management systems to provide a seamless shopping experience for users. 
                Examples of popular e-commerce websites include Amazon, eBay, and Shopify stores.
            </p>
            <p>
            In an e-commerce transaction, customers can browse through product listings, make purchases, 
            and complete transactions entirely online without the need for physical interaction with a seller. 
            E-commerce has revolutionized the way businesses operate, offering convenience, accessibility, 
            and a global reach to both buyers and sellers.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox