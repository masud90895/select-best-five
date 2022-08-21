
// let selectorBtn = document.getElementsByClassName('selector');
// for(selector of selectorBtn){
//     selector.addEventListener('click', function(event){
//         let select = event.target.parentNode.parentNode.childNodes[1].innerText;
//         console.log(select);
//     })
// }

let count = 0;
let selectorBtn = document.getElementsByClassName('selector');
for(selector of selectorBtn){
    selector.addEventListener('click', function(event){
        count++;
        let select = event.target.parentNode.parentNode.childNodes[1].innerText;
        let selected = event.target.setAttribute('disabled','');

        if(count > 5){
            let selected = event.target.removeAttribute("disabled");
            alert("You Can't Added More Then 5 Player");
            return;
        }
         
         let selectedPlayer = document.getElementById('selected-total');
         let totalSelectedPlayer = parseFloat(selectedPlayer.innerText);
         selectedPlayer.innerText = count;
         

        const mainContainer = document.getElementById("content-container");
        
       const tableContainer = document.createElement("tr");
       tableContainer.innerHTML = `
       <th scope="row">${count}</th>
       <td>  </td>
       <td>${select}</td>
       `;
       mainContainer.appendChild(tableContainer);

       
    })
}