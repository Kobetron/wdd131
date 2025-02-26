function isCardNumberValid(number) {
    // Basic Luhn algorithm check (replace with a proper library for production)
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i], 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
}

function isDateInFuture(month, year) {
    const now = new Date();
    const expiryDate = new Date(`${year}-${month}-01`); // Create a date object for the expiry

    return expiryDate > now;
}

function displayError(msg) {
    document.querySelector('.errorMsg').textContent = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, ''); // Remove spaces
    const expiryMonth = document.getElementById('expiryMonth').value;
    const expiryYear = document.getElementById('expiryYear').value;

    displayError(''); // Clear previous errors

    if (!/^\d+$/.test(cardNumber)) {
        errorMsg += 'Card number must contain only digits.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid.\n';
    }

    if (!/^\d+$/.test(expiryMonth) || !/^\d+$/.test(expiryYear) || !isDateInFuture(expiryMonth, expiryYear)) {
        errorMsg += 'Expiry date is invalid or in the past.\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    // Form is valid - you can now submit the data
    alert('Form submitted successfully!');
    return true;
}

document.getElementById('credit-card').addEventListener('submit', submitHandler);