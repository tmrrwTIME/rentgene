export default (values) => {
  const vals = values.toJS();
  let errors = {};
  // if (!vals.username) {
  //   errors.username = 'Required';
  // } else if (vals.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less';
  // }
  if (!vals.contactEmail) {
    errors.contactEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(vals.contactEmail)) {
    errors.contactEmail = 'Invalid email address';
  }
  // if (!vals.age) {
  //   errors.age = 'Required';
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number';
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old';
  // }
  return errors;
};
