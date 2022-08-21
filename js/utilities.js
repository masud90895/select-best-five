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