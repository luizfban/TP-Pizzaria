const validSizes = [0, 1, 2, 3];

export const validateProduct = (product) => {
  const { name, ingredients = [], prices = [] } = product;
  const errors = [];

  if (!name) {
    errors.push('missing field name');
  }

  if (ingredients.length == 0) {
    errors.push('it needs at least one ingredient');
  }

  if (prices.length === 0) {
    errors.push('missing field prices');
  }

  prices.forEach(({ size, price }) => {
    if (validSizes.findIndex((i) => i === size) === -1) {
      errors.push(
        `valid size: {0: 'SMALL', 1: 'MEDIUM', 2: 'BIG', 3: 'FAMILY'}, invalid size: ${size}`
      );
    }

    if (!price) {
      errors.push('missing price on prices');
    }
  });

  return errors.length > 0 ? errors : null;
};
