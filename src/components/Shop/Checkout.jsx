import React, { useState } from 'react';

function Checkout({ lightMode }) {
  // State to capture form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    area: '',
    postalCode: '',
    address: '',
    phone: '',
    companyName: '',
  });

  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Men Hooded', quantity: 1, price: 130.00 },
    { id: 2, name: 'Wooden Coffee Table', quantity: 1, price: 85.00 },
    { id: 3, name: 'Colored Belt Bag', quantity: 1, price: 60.00 },
  ]);

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
          items: orderItems,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          postalCode: formData.postalCode,
          phone: formData.phone,
          companyName: formData.companyName,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Order placed successfully!');
        console.log('Order ID:', result.orderId);
      } else {
        setStatus(`Order failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setStatus('Error during checkout.');
    }
  };

  return (
    <section className={`shop-checkout ${lightMode ? 'light' : ''} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="order-form md-mb50">
              <h4 className="mb-40">Billing Details</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">First Name *</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Last Name *</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Your Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Country *</label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">City / Town *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Area *</label>
                      <input type="text" name="area" value={formData.area} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Postal Code *</label>
                      <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Address *</label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Phone *</label>
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Company Name</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <button type="submit" className="main-colorbg4 butn butn-md butn-bg text-dark">
                    <span className="text-u fw-600">Place Order</span>
                  </button>
                </div>
                {status && <p>{status}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            {/* Order summary */}
            <div className="checkout-order-info">
              <h4 className="mb-40">Your Order</h4>
              <ul className="rest">
                {orderItems.map((item) => (
                  <li key={item.id} className="mb-5">
                    <div className="d-flex align-items-center">
                      <div><p>{item.name}</p></div>
                      <div className="ml-auto"><h5 className="fz-18">${item.price.toFixed(2)}</h5></div>
                    </div>
                  </li>
                ))}
                <li className="pt-10 bord-thin-top">
                  <div className="d-flex align-items-center">
                    <div><h6>Subtotal</h6></div>
                    <div className="ml-auto"><h5 className="main-color4 fz-20">${orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h5></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
