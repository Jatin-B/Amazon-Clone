import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.price;
  });

  const totalPrice = productPrice + shippingPrice;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">
      ₹${productPrice}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
      ₹${shippingPrice}
      </div>
    </div>
    
    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
      ₹${totalPrice}
      </div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}