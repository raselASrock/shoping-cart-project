/*
1. Add event Listener to the btn case plus button 
2. Get the value inside the case number field { input field }
3. Convert the number to an Integer
4. Calculate the new case number
5. Set the value to the case number field

*/ 


function updateCaseNumber ( isIncreage ){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if(isIncreage === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }


    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


function updateCaseTotalPrice (newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newCaseNumber =  updateCaseNumber( true )
   
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
   
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber( false )

    updateCaseTotalPrice(newCaseNumber)
    calculateSubTotal();

})