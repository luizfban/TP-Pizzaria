export const validateOrder = (product) => {
  const { products = [] } = product;
  const errors = [];

  if (products.length === 0) {
    errors.push('it needs at least one product');
  }

  products.forEach(({ quantity, id }, index) => {
    if (!id) {
      errors.push(`missing field id on product ${index}`);
    }

    if (!quantity) {
      errors.push(`missing field quantity on product ${index}`);
    }
  });

  return errors.length > 0 ? errors : null;
};
