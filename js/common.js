function getTextElementValueById ( elementId ){
    const phoneTotalElement = document.getElementById( elementId );
    const currentPhoneTotalStrring = phoneTotalElement.innerText ;
    const currentPhoneTotal = parseInt(currentPhoneTotalStrring);
    return currentPhoneTotal;
}

function setTextElementValueById (elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}



function calculateSubTotal (){
    // Calculate Total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    
    setTextElementValueById('sub-total', currentSubTotal);

    // Calculate Tax

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    // Calaulate Final Amount

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount);
}