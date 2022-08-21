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
    
    let selectedPlayer = document.getElementById('selected-total');
    let totalSelectedPlayer = parseFloat(selectedPlayer.innerText);

    let totalPlayerExpensesAmount = selectedPlayerValue * totalSelectedPlayer;
   
    let playerExpenses = document.getElementById('player-expenses');
    let playerExpensesTotal = parseFloat(playerExpenses.innerText);
    playerExpenses.innerText = totalPlayerExpensesAmount;


})

// calculate total 

document.getElementById('calculate-total').addEventListener('click',function(){
    let managerAmount = document.getElementById
})
