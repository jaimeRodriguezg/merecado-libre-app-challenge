interface PriceObject {
  currency: string;
  price: number;
  decimals: number;
}

export const format = (value: PriceObject) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: value.currency,
    minimumFractionDigits: value.decimals,
    maximumFractionDigits: value.decimals,
  });

  return formatter.format(value.price);
};
