document.getElementById('Calculate').addEventListener('click', function(){
    let selectedPlayerValue = getInputValueById('player-budget');

    if(isNaN(selectedPlayerValue)){
        alert('Please Provide a Number');
        return;
    }
     else if(selectedPlayerValue < 0){
        alert("Please Provide Positive Number");
        return;
     }

    let totalSelectedPlayer = getElementById('selected-total');

    let totalPlayerExpensesAmount = selectedPlayerValue * totalSelectedPlayer;

    let playerExpenses = setElementValueById('player-expenses', totalPlayerExpensesAmount);

})

// calculate total 

document.getElementById('calculate-total').addEventListener('click',function(){
    let managerAmountValue = getInputValueById('manager-amount');

    let coachAmountValue = getInputValueById ('coach-amount');
 
    let playerExpensesTotal = getElementById('player-expenses');
    
    if(managerAmountValue < 0){
      alert("Please Provide Positive Number");
      return;
   }
    else if ( coachAmountValue < 0){
      alert("Please Provide Positive Number");
      return;
   }
    if(isNaN(coachAmountValue)){
        alert('Please Provide a Number');
        return;
    }
   else if(isNaN(managerAmountValue)){
        alert('Please Provide a Number');
        return;
    }

    let totalAmount = managerAmountValue + coachAmountValue + playerExpensesTotal ;

    let total = document.getElementById('total');
    total.innerText = totalAmount;

})
