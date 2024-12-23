import { Link } from 'react-router-dom'
import images from '../../../assets/img/images'
import './Checkout.css'

export default function Checkout() {
  const payment = [
    { id: '1', methodName: 'Cash On Delivery', images: images.payment1 },
    { id: '2', methodName: 'Bkash', images: images.payment2 },
    { id: '3', methodName: 'Nagad', images: images.payment3 },
    { id: '4', methodName: 'Rocket', images: images.payment4 },
    { id: '5', methodName: 'Amar Pay', images: images.payment5 },
    { id: '6', methodName: 'SSl Commerce', images: images.payment6 },
    { id: '7', methodName: 'Stripe', images: images.payment7 },
    { id: '8', methodName: 'Upay', images: images.payment8 },
    { id: '9', methodName: 'Visa', images: images.payment9 },
  ]
  return (
    <section className="es_container px-3 py-8">
      <form action="" className="checkout_wrapper">
        <div className="checkout_left">
          <div className="cart_order_title">
            <h2>Shipping</h2>
          </div>

          <div className="checkout_address">
            <div className="address_item">
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Your First Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Your Last Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">Company (Optional)</label>
              <input type="text" placeholder="Your Last Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">Email Adress</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>

            <div className="address_item">
              <label htmlFor="">Phone Number</label>
              <input type="tel" placeholder="Enter Phone Number" />
            </div>

            <div className="address_item">
              <label htmlFor="">Delivery Address</label>
              <input type="text" placeholder="Type Your Address" />
            </div>

            <div className="address_item">
              <label htmlFor="">City Name</label>
              <input type="text" placeholder="Your City Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">State Name</label>
              <input type="text" placeholder="Your State Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">Country</label>
              <input type="text" placeholder="Your Country Name" />
            </div>

            <div className="address_item">
              <label htmlFor="">Zip/Postal Code</label>
              <input type="text" placeholder="City Name" />
            </div>
          </div>
        </div>

        <div className="checkout_right">
          <div className="order_sumury">
            <div className="sumury_title">Order Summery</div>
            <div className="summery_total_product">
              <span>Total Items</span>
              <span>03</span>
            </div>
            <div className="summury_total_price">
              <span>Shipping</span>
              <span>BDT 45</span>
            </div>
            <div className="summury_total_price">
              <span>Sub Total</span>
              <span>BDT 2850</span>
            </div>
          </div>

          <div className="payment_wrapper">
            <div className="sumury_title">Select Payment Method</div>

            <div className="payment_item_wraper">
              {payment.slice(0, 5).map(method => (
                <label className="payment_item" key={method.id}>
                  <input type="radio" name="payment" />
                  <span className="payment_image">
                    <img src={method.images} alt="" />
                    {method.methodName}
                  </span>
                </label>
              ))}
            </div>
            {/* submit button */}
            <div className="submit_button">
              <Link>
                <button type="submit" className="main_btn">
                  Confirm Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
