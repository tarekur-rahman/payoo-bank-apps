function getValueFromId(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}

// 2
function getBlance(){
    const blanceText = document.getElementById("blance");
    const blance = blanceText.innerText;
    return Number(blance);
}