let arr = [];
function info() {
    let person = {
        name: document.getElementById("person-name").value,
        address: document.getElementById("person-address").value,
        email: document.getElementById("person-email").value,
        dob: document.getElementById("person-DoB").value,
        mobile: document.getElementById("person-mobile").value,
    }
    let mobile = checkNumber(person.mobile);
    let dob = checkDoB(person.dob);
    let email = checkEmail(person.email);
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
    else if(person.email === "" || email === false){
        let name = document.getElementById("person-email");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "@gamil format";
    }
    else if(person.dob === "" || dob === false){
        let name = document.getElementById("person-DoB");
        name.style.backgroundColor = "#FFCCCB";
        name.placeholder = "Date of Birth";
    }
    else if(person.mobile === "" || mobile === false){
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
const checkDoB = (dob)=>{
    let currentDate = new Date();
    let enteredDate = new Date(dob);
    return enteredDate < currentDate; 
}

const checkEmail = (email)=>{
    let check = /^[a-z0-9_.]+@[a-z0-9._]+$/;
    return check.test(email);
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
        tableRow += "<td>" + element.email + "</td>";
        tableRow += "<td>" + element.dob + "</td>";
        tableRow += "<td>" + element.mobile + "</td>";
    }
    document.getElementById("table-body").innerHTML = tableRow;
}

let cancelinfo = () => {
    document.getElementById("person-name").value = "";
    document.getElementById("person-name").placeholder = "Name";
    document.getElementById("person-address").value = "";
    document.getElementById("person-address").placeholder = "Address";
    document.getElementById("person-email").value = "";
    document.getElementById("person-email").placeholder = "email";
    document.getElementById("person-DoB").value = "";
    document.getElementById("person-mobile").value = "";
    document.getElementById("person-mobile").placeholder = "Mobile-Number";
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length-2; i++) {
            inputs[i].style.backgroundColor = 'white';
    }
}
