// src/pages/PaymentHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PaymentHistory() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments'); // Create this endpoint
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments recorded.</p>
      ) : (
        <ul>
          // Inside PaymentHistory.js

{payments.map((payment) => (
    <li key={payment._id}>
        <p>Name: {payment.name}</p>
        <p>Phone: {payment.phone}</p>
        <p>Address: {payment.address}</p>
        <p>
            Screenshot: 
            <a href={`/${payment.paymentScreenshot}`} target="_blank" rel="noopener noreferrer">View Screenshot</a>
        </p>
    </li>
))}

        </ul>
      )}
    </div>
  );
}

export default PaymentHistory;
