function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector('#checkoutForm');
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector('#creditCardNumberContainer');
    const paypalContainer = document.querySelector("#paypalUsernameContainer");
    const creditInput = document.querySelector('#creditCardNumber input');
    const paypalInput = document.querySelector('#paypalUsernameContainer input');
    //element.required=false
    //element.classList.add("hide")         .remove
  
    // Show the container based on the selected payment method, and add the required attribute back.
  
    let value = e.target.value; //theForm.paymentMethod.value
    paypalContainer.classList.add('hide');
    creditCardContainer.classList.add('hide');
    paypalContainer.required=false; //theForm.paypalUsername.required = false;
    creditCardContainer.required=false;

    if (value == 'creditCard') {
        creditCardContainer.classList.remove('hide');
        creditCardContainer.required=true;
    } else if (value == 'paypal') {
        paypalContainer.classList.remove('hide');
        paypalContainer.required=true;
    }
        
      
    

    

}

  // attach a change event handler to the paymentMethod input
  const selectElement = document.getElementById("paymentMethod");

  // attach a submit event handler to the form
 selectElement.addEventListener('change', togglePaymentDetails);