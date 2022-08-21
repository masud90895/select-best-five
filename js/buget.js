document.getElementById('Calculate').addEventListener('click', function(){
    let playerBudget = document.getElementById('player-budget');
    let selectedPlayerValue = parseFloat(playerBudget.value);

    if(isNaN(selectedPlayerValue)){
        alert('Please Provide a Number');
        return;
    }
     else if(selectedPlayerValue < 0){
        alert("Please Provide Positive Number");
        return;
     }
    
    // let selectedPlayer = document.getElementById('selected-total');
    // let totalSelectedPlayer = parseFloat(selectedPlayer.innerText);

    let selectedPlayer = getElementById('selected-total');

    let totalPlayerExpensesAmount = selectedPlayerValue * totalSelectedPlayer;
   
    // let playerExpenses = document.getElementById('player-expenses');
    // let playerExpensesTotal = parseFloat(playerExpenses.innerText);
    // playerExpenses.innerText = totalPlayerExpensesAmount;
    

    let playerExpenses = setElementValueById('player-expenses', totalPlayerExpensesAmount);


})

// calculate total 

document.getElementById('calculate-total').addEventListener('click',function(){
    let managerAmount = document.getElementById('manager-amount');
    let managerAmountValue= parseFloat(managerAmount.value);

    let coachAmount = document.getElementById('coach-amount');
    let coachAmountValue = parseFloat(coachAmount.value);

    let playerExpenses = document.getElementById('player-expenses');
    let playerExpensesTotal = parseFloat(playerExpenses.innerText);
    if(isNaN(coachAmountValue , playerExpensesTotal)){
        alert('Please Provide a Number');
        return;
    }
     else if(coachAmountValue < 0 ||  playerExpensesTotal < 0){
        alert("Please Provide Positive Number");
        return;
     }

    let totalAmount = managerAmountValue + coachAmountValue + playerExpensesTotal ;

    let total = document.getElementById('total');
    total.innerText = totalAmount;

})
