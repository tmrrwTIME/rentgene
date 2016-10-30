export default (values) => {
  const vals = values.toJS();
  const errors = {};
  if (vals.images.length < 5) {
    errors.images = 'Please insert at least 5 photos';
  }
  return errors;
};
