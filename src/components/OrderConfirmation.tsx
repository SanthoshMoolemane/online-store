import './OrderConfirmation.css';

interface OrderConfirmationProps {
    order: any;
  }

  const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ order }) => {

    console.log("order:",order)

    if (!order) {
        return <div>No order details available.</div>;
      }

    return (
      <div className="order-confirmation">
        <h2>Order Confirmation</h2>
        <p>Order Number: {Math.floor(Math.random() * 1000000)}</p>
        <p>Item: {order.fullName}</p>
        <p>Amount Charged: ${order.Price}</p>
      </div>
    );
  };

  export default OrderConfirmation;
