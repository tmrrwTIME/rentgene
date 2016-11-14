export default (values) => {
  console.log(values);
  const vals = values.toJS();
  console.log(vals);
  const errors = {};
  if (vals.images.length < 5) {
    errors.images = 'Please insert at least 5 photos';
  }
  return errors;
};
