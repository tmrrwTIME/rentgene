export default (values, address) => {
  console.log(values);
  const vals = values.toJS();
  console.log(vals);
  const errors = {};
  if (vals.images.length < 5) {
    errors.images = 'Please insert at least 5 photos';
  }
  if((!address.hasOwnProperty('locality') || address['locality'] == "") ||
   	 (!address.hasOwnProperty('street-address') || address['street-address'] == "") || 
   	 (!address.hasOwnProperty('region') || address['region'] == "")) {
  	  	errors.address = 'Please pick an address from the auto-suggest dropdown in the address field.';
  }
  return errors;
};
