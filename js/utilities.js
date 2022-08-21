function getInputValueById (elements){
    let element = document.getElementById(elements);
    let elementValue = parseFloat(element.value);
    return elementValue;
}
function getElementById (elementId){
    let element = document.getElementById(elementId);
    let elementInnerText = parseFloat(element.innerText);
    return elementInnerText;
}



function setElementValueById (elementId, value){
    let element = document.getElementById(elementId);
    let elementInnerText = parseFloat(element.innerText);
    element.innerText = value;
}