export const formatCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
  return formattedAmount;
};
