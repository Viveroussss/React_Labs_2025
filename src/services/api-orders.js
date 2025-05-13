export const fetchOrders = async () => {
    try {
      const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  };
  