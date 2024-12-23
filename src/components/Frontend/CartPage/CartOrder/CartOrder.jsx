/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import images from '../../../../assets/img/images'
import './CartOrder.css'

export default function CartOrder() {
  const [cartProducts, setCartProducts] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
  })

  const incrementQuantity = productId => {
    setCartProducts(prevCartProducts => ({
      ...prevCartProducts,
      [productId]: (prevCartProducts[productId] || 1) + 1,
    }))
  }

  const decrementQuantity = productId => {
    setCartProducts(prevCartProducts => {
      const newQuantity = (prevCartProducts[productId] || 1) - 1
      if (newQuantity > 0) {
        return {
          ...prevCartProducts,
          [productId]: newQuantity,
        }
      } else {
        const { [productId]: _, ...rest } = prevCartProducts
        return rest
      }
    })
  }

  const cartProduct = [
    {
      id: '1',
      productName: 'Horitoki Special Owls all over Kurti Piece',
      productCategory: 'Womens T-Shirts',
      productImg: images.categoryProduct1,
      oldPrice: 250,
      newPrice: 200,
    },
    {
      id: '2',
      productName: 'Horitoki Special Owls all over Kurti Piece',
      productCategory: 'Womens T-Shirts',
      productImg: images.categoryProduct1,
      oldPrice: 250,
      newPrice: 200,
    },
    {
      id: '3',
      productName: 'Horitoki Special Owls all over Kurti Piece',
      productCategory: 'Womens T-Shirts',
      productImg: images.categoryProduct1,
      oldPrice: 250,
      newPrice: 200,
    },
    {
      id: '4',
      productName: 'Horitoki Special Owls all over Kurti Piece',
      productCategory: 'Womens T-Shirts',
      productImg: images.categoryProduct1,
      oldPrice: 250,
      newPrice: 200,
    },
    {
      id: '5',
      productName: 'Horitoki Special Owls all over Kurti Piece',
      productCategory: 'Womens T-Shirts',
      productImg: images.categoryProduct1,
      oldPrice: 250,
      newPrice: 200,
    },
  ]

  const totalItems = Object.values(cartProducts).reduce(
    (total, quantity) => total + quantity,
    0,
  )
  const subTotal = cartProduct.reduce(
    (total, product) =>
      total + product.newPrice * (cartProducts[product.id] || 0),
    0,
  )

  return (
    <section className="es_container py-8">
      <div className="cartpage_wrapper">
        <div className="cart_product_main">
          <div className="p-5 bg-white rounded-xl mb-6">
            <h2 className="text-black font-bold text-[22px]">Cart Order</h2>
          </div>

          <div className="cart_product_list">
            {cartProduct.map(product => (
              <div key={product.id} className="cart_product_item">
                <div className="cart_product_image">
                  <img src={product.productImg} alt={product.productName} />
                </div>
                <div className="cart_product_content">
                  <div className="cart_product_details">
                    <h3 className="cart_product_name">{product.productName}</h3>
                    <h4 className="cart_product_subtitle">
                      {product.productCategory}
                    </h4>
                  </div>
                  <div className="cart_item_inner">
                    <div className="cart_quantity">
                      <button onClick={() => decrementQuantity(product.id)}>
                        <FiMinus />
                      </button>
                      <input
                        readOnly
                        type="number"
                        value={cartProducts[product.id] || 1}
                      />
                      <button onClick={() => incrementQuantity(product.id)}>
                        <GoPlus />
                      </button>
                    </div>

                    <div className="cart_item_price">
                      <span className="cart_old_price">
                        BDT{product.oldPrice}
                      </span>
                      <strong className="cart_offer_price">
                        BDT{product.newPrice * (cartProducts[product.id] || 1)}
                      </strong>
                    </div>
                    <div className="cart_item_delete">
                      <button>
                        <AiOutlineDelete className="text-[20px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart_calculate">
          <div className="order_sumury">
            <div className="sumury_title">Order Summary</div>

            <div className="summery_total_product">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summury_total_price">
              <span>Shipping</span>
              <span>BDT 45</span>
            </div>

            <div className="summury_total_price">
              <span>Sub Total</span>
              <span>BDT{subTotal}</span>
            </div>

            <div className="coupon_input">
              <input type="text" placeholder="Voucher Code" />
              <button type="submit">Apply</button>
            </div>

            <div className="summery_button">
              <Link to="/checkout">Place Order</Link>
            </div>
          </div>
          <div className="mt-6 hidden lg:block">
            <img src={images.cartAdd} alt="Ad" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
