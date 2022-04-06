export const validateEmployee = (employee) => {
  const { name, email, password } = employee;
  const errors = [];

  if (!name) {
    errors.push('missing field name');
  }

  if (!email) {
    errors.push('missing field email');
  }

  if (!password) {
    errors.push('missing field password');
  }

  return errors.length > 0 ? errors : null;
};
