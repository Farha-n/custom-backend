// src/pages/EditOrder.js
import React, { useEffect, useState } from 'react';

const EditOrder = ({ orderId }) => {
    const [orderDetails, setOrderDetails] = useState(null);
    
    // Function to fetch order details when the component mounts
    useEffect(() => {
        const fetchOrderDetails = async () => {
            const response = await fetch(`/api/orders/${orderId}`);
            const data = await response.json();
            setOrderDetails(data.order); // Assuming the response has an 'order' object
        };

        fetchOrderDetails();
    }, [orderId]);

    const updateOrder = async (orderId, updatedData) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                // Optionally redirect or refresh the order details
            } else {
                alert('Error updating order: ' + data.message);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            name: orderDetails.name, // Use the existing details or updated inputs
            phone: orderDetails.phone,
            address: orderDetails.address,
            pincode: orderDetails.pincode,
            state: orderDetails.state,
            district: orderDetails.district,
            email: orderDetails.email,
            items: orderDetails.items, // Keep existing items or modify as needed
        };
        updateOrder(orderId, updatedData); // Pass the order ID and updated data
    };

    if (!orderDetails) return <p>Loading...</p>;

    return (
        <div>
            <h2>Edit Order</h2>
            <form onSubmit={handleEditSubmit}>
                <input
                    type="text"
                    value={orderDetails.name}
                    onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                    placeholder="Full Name"
                    required
                />
                <input
                    type="text"
                    value={orderDetails.phone}
                    onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                    placeholder="Phone Number"
                    required
                />
                <input
                    type="text"
                    value={orderDetails.address}
                    onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                    placeholder="Address"
                    required
                />
                <input
                    type="text"
                    value={orderDetails.pincode}
                    onChange={(e) => setOrderDetails({ ...orderDetails, pincode: e.target.value })}
                    placeholder="Pincode"
                    required
                />
                <input
                    type="text"
                    value={orderDetails.state}
                    onChange={(e) => setOrderDetails({ ...orderDetails, state: e.target.value })}
                    placeholder="State"
                    required
                />
                <input
                    type="text"
                    value={orderDetails.district}
                    onChange={(e) => setOrderDetails({ ...orderDetails, district: e.target.value })}
                    placeholder="District"
                    required
                />
                <input
                    type="email"
                    value={orderDetails.email}
                    onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <button type="submit">Update Order</button>
            </form>
        </div>
    );
};

export default EditOrder;
