export const validateCustomer = (customer) => {
  const { name, email } = customer;
  const errors = [];

  if (!name) {
    errors.push('missing field name');
  }

  if (!email) {
    errors.push('missing field email');
  }

  return errors.length > 0 ? errors : null;
};
