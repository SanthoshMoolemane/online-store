import { useState } from "react";
import { storeItems } from "../data/storeItems";
import './StoreItemList.css';
import dummyImage from '../assets/image.jpg';

interface StoreItemListProps {
    onBuy: (item: any) => void;
}

const StoreItemList: React.FC<StoreItemListProps> = ({ onBuy }) => {
    const [items, setItems] = useState(storeItems);
    const [filter, setFilter] = useState('');

    const sortByName = (ascending: boolean) => {
        const sortedItems = [...items].sort((a, b) => {
            return ascending
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        setItems(sortedItems);
    };

    const sortByPrice = (ascending: boolean) => {
        const sortedItems = [...items].sort((a, b) => {
            return ascending ? a.Price - b.Price : b.Price - a.Price;
        });
        setItems(sortedItems);
    };

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <div className='search-container'>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <div className="sort-buttons-container">
                    <button onClick={() => sortByName(true)}>Sort by Name (A-Z)</button>
                    <button onClick={() => sortByName(false)}>Sort by Name (Z-A)</button>
                    <button onClick={() => sortByPrice(true)}>Sort by Price (Low-High)</button>
                    <button onClick={() => sortByPrice(false)}>Sort by Price (High-Low)</button>
                </div>
            </div>
            <div className="store-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="store-item">
                        <div className="image-container">
                            <img src={dummyImage} alt={item.name} />
                        </div>
                        <div className="description-container">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.Price}</p>
                            <button onClick={() => onBuy(item)}>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreItemList;
