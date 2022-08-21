
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
        const mainContainer = document.getElementById("content-container");
        console.log(mainContainer);
       const tableContainer = document.createElement("tr");
       tableContainer.innerHTML = `
       <th scope="row">${count}</th>
       <td>  </td>
       <td>${select}</td>
       `;
       mainContainer.appendChild(tableContainer);

       
    })
}