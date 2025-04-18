import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import '../styles/Orders.css';

interface Order {
  id: string;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
  total: number;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (isLoading) return <div className="loading">Loading orders...</div>;

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found</p>
      ) : (
        orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))
      )}
    </div>
  );
};

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => (
  <div className="order-card">
    <div className="order-header">
      <span>Order #{order.id}</span>
      <span className={`status-${order.status}`}>
        {order.status.toUpperCase()}
      </span>
    </div>
    <div className="order-details">
      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
      <p>Total: ${order.total.toFixed(2)}</p>
    </div>
    <button className="download-btn">Download Receipt</button>
  </div>
);

export default Orders;