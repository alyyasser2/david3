// src/pages/api/order.js
import db from '../../common/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customerName, customerEmail, items, address, city, country, postalCode, phone, companyName } = req.body;

    // Validate input data
    if (!customerName || !customerEmail || !items || items.length === 0) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    try {
      // Calculate the total amount
      const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

      // Insert the order into the `orders` table
      const [orderResult] = await db.execute(
        'INSERT INTO orders (customer_name, customer_email, total_amount, address, city, country, postal_code, phone, company_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [customerName, customerEmail, totalAmount, address, city, country, postalCode, phone, companyName]
      );

      const orderId = orderResult.insertId;

      // Insert each item into the `order_items` table
      for (const item of items) {
        await db.execute(
          'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
          [orderId, item.id, item.quantity, item.price]
        );
      }

      return res.status(201).json({ success: true, message: 'Order created successfully', orderId });
    } catch (error) {
      console.error('Order creation error:', error);
      return res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
