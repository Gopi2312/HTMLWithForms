let arr = [];
function info() {
    let person = {
        name: document.getElementById("person-name").value,
        address: document.getElementById("person-address").value,
        city: document.getElementById("person-city").value,
        dob: document.getElementById("person-DoB").value,
        mobile: document.getElementById("person-mobile").value,
    }
    let check = checkNumber(person.mobile);
    if(person.name === "" || checkChar(person.name) === false){
        let name = document.getElementById("person-name");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "Characters Only Required";
    }
    else if(person.address === ""){
        let name = document.getElementById("person-address");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "Address Required";
    }
    else if(person.city === "" || checkChar(person.name) === false){
        let name = document.getElementById("person-city");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "Characters Only Required";
    }
    else if(person.dob === ""){
        let name = document.getElementById("person-DoB");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "Date of Birth";
    }
    else if(person.mobile === "" || check === false){
        let name = document.getElementById("person-mobile");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "10-Digit Number start with 6-9";
    }
    else {
        arr.push(person);
        cancelinfo();
    }
}

const checkNumber = (mobile) => {
    let check = /^[6-9]\d{9}$/;
    return check.test(mobile);
}
const checkChar = (char) => {
    let check = /^[a-zA-Z]+$/;
    return check.test(char);
}
const addinfo = () => {
    info();
    renderTable();
}

let renderTable = () => {
    let tableRow = "";
    for (const element of arr) {
        tableRow += "<tr><td>" + element.name + "</td>";
        tableRow += "<td>" + element.address + "</td>";
        tableRow += "<td>" + element.city + "</td>";
        tableRow += "<td>" + element.dob + "</td>";
        tableRow += "<td>" + element.mobile + "</td>";
    }
    document.getElementById("table-body").innerHTML = tableRow;
}

let cancelinfo = () => {
    document.getElementById("person-name").value = "";
    document.getElementById("person-address").value = "";
    document.getElementById("person-city").value = "";
    document.getElementById("person-DoB").value = "";
    document.getElementById("person-mobile").value = "";
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length-2; i++) {
        inputs[i].style.backgroundColor = '#B9E6FF';
    }
}
