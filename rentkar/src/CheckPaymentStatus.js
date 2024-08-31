import React, { useEffect } from 'react';

const CheckPaymentStatus = () => {
  useEffect(() => {
    
    const getQueryParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return Object.fromEntries(urlParams.entries());
    };

    const params = getQueryParams();
    if (params.status === 'SUCCESS') {
      localStorage.setItem('paymentStatus', 'SUCCESS');
      window.location.href = '/'; 
    }
  }, []);

  return null; 
};

export default CheckPaymentStatus;
