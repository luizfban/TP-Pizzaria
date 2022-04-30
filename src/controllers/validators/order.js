const validStatus = [0, 1, 2, 3];
const validSizes = [0, 1, 2, 3];

export const validateOrder = (product) => {
  const { products = [] } = product;
  const errors = [];

  if (products.length === 0) {
    errors.push('it needs at least one product');
  }

  products.forEach(({ quantity, id, size }, index) => {
    if (!id) {
      errors.push(`missing field id on product ${index}`);
    }

    if (!quantity) {
      errors.push(`missing field quantity on product ${index}`);
    }

    if (!size === undefined) {
      errors.push(`missing field size on product ${index}`);
    }

    if (validSizes.findIndex((i) => i === size) === -1) {
      errors.push(
        `valid size: {0: 'SMALL', 1: 'MEDIUM', 2: 'BIG', 3: 'FAMILY'}, invalid size: ${size}`
      );
    }
  });

  return errors.length > 0 ? errors : null;
};

export const validateStatus = (status) => {
  const errors = [];

  if (validStatus.findIndex((i) => i === status) === -1) {
    errors.push(
      "valid status: {0: 'PENDING', 1: 'PROCESSING', 2: 'COMPLETED', 3: 'PAID'}"
    );
  }

  return errors.length > 0 ? errors : null;
};
