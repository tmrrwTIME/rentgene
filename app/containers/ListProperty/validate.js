export default (values, address) => {
  console.log(values);
  const vals = values.toJS();
  console.log(vals);
  const errors = {};
  if (vals.images.length < 8) {
    errors.images = 'Please insert at least 8 photos';
  }
  var currentAddress = $('#search').val();
  if(!currentAddress) {
    address = {
      'postal-code':'',
      'street-address':'',
      'country-name':'',
      'locality':'',
      'region':'',
    };
  }

  if((!address.hasOwnProperty('locality') || address['locality'] == "") ||
   	 (!address.hasOwnProperty('street-address') || address['street-address'] == "") || 
   	 (!address.hasOwnProperty('region') || address['region'] == "") ||
   	 (!address.hasOwnProperty('postal-code') || address['postal-code'] == "")) {
  	  	errors.address = 'Please pick an address from the auto-suggest dropdown in the address field.';
  }
  return errors;
};
