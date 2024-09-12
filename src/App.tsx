import { useState } from 'react';
import './App.css';
import StoreItemList from './components/StoreItemList';
import CheckoutForm from './components/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleBuy = (item: any) => {
    setSelectedItem(item);
    setPage(2);
  };

  const handleOrderSubmit = (details: any) => {
    setOrderDetails(details);
    setPage(3);
  };

  return (
    <div className='app-container'>
      {page === 1 && <StoreItemList onBuy={handleBuy} />}
      {page === 2 && <CheckoutForm selectedItem={selectedItem} onSubmit={handleOrderSubmit} />}
      {page === 3 && <OrderConfirmation order={orderDetails} />}
    </div>
  );
}

export default App;
