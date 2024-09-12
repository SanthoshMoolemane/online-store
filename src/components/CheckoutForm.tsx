import { useState } from "react";
import './CheckoutForm.css'

interface CheckoutFormProps {
    selectedItem: any;
    onSubmit: (orderDetails: any) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ selectedItem, onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const {name, Price} = selectedItem;

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            newErrors.fullName = 'Full Name must contain only letters.';
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = 'Invalid email format.';
        }

        if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            newErrors.phone = 'Phone Number must be in the format xxx-xxx-xxxx.';
        }

        if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(creditCard)) {
            newErrors.creditCard = 'Credit Card number must be 16 digits long and in the format xxxx xxxx xxxx xxxx.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("values:", fullName, email, phone, creditCard, Price)
            onSubmit({ fullName, email, phone, creditCard, Price });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>{name}</p>
            <p>Price: ${Price}</p>

            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <span className="error">{errors.email}</span>}
            <input type="tel" placeholder="Phone (xxx-xxx-xxxx)" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <input type="text" placeholder="Credit Card" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} required />
            {errors.creditCard && <span className="error">{errors.creditCard}</span>}
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default CheckoutForm;
