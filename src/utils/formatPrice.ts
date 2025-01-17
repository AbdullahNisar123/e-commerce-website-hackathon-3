export const formatPrice = {
    // Format to Rupiah with proper formatting
    toRupiah: (price: number | string): string => {
      try {
        const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
        if (isNaN(numericPrice)) return 'Rp 0';
        
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(numericPrice);
      } catch (error) {
        console.error('Error formatting price:', error);
        return 'Rp 0';
      }
    },
  
    // Parse price string to number, handling multiple formats
    parsePrice: (priceString: string | number): number => {
      try {
        if (typeof priceString === 'number') return priceString;
        const cleanString = priceString
          .replace(/[Rp.,\s]/g, '')
          .replace(/[^0-9-]/g, '');
        return parseInt(cleanString, 10) || 0;
      } catch (error) {
        console.error('Error parsing price:', error);
        return 0;
      }
    },
  
    // Format to simple number for calculations
    toNumber: (price: number | string): number => {
      if (typeof price === 'number') return price;
      return formatPrice.parsePrice(price);
    }
  }; 