export default (values) => {
  console.log(values);
  const vals = values.toJS();
  console.log(vals);
  const errors = {};
  if (vals.images.length < 8) {
    errors.images = 'Please insert at least 8 photos';
  }
  return errors;
};
