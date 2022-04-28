export const validateProduct = (product) => {
  const { name, ingredients = [], price } = product;
  const errors = [];

  if (!name) {
    errors.push('missing field name');
  }

  if (ingredients.length == 0) {
    errors.push('it needs at least one ingredient');
  }

  if (!price) {
    errors.push('missing field price');
  }

  return errors.length > 0 ? errors : null;
};
