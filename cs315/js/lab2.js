function add() {
    let input = document.getElementById("textInput");
    let output = document.getElementById("textoutput")
    output.value = input.value + output.value;
     input.value = "";

   
}

function addition() {
    let firstvalue = +document.getElementById("firstValue").value;
    let secondtvalue = +document.getElementById("secondValue").value
    let sum = firstvalue + secondtvalue;

    let result = document.createElement("p");
    result.innerHTML = sum;
    document.body.append(result);

}
function subtraction() {
    let firstvalue = +document.getElementById("firstValue").value;
    let secondtvalue = +document.getElementById("secondValue").value;
    let difference = firstvalue - secondtvalue;

    let result = document.createElement("p");
    result.innerHTML = difference;
    document.body.append(result);

}

function multiplication() {
    let firstvalue = +document.getElementById("firstValue").value;
    let secondtvalue = +document.getElementById("secondValue").value;
    let product = firstvalue * secondtvalue;

    let result = document.createElement("p");
    result.innerHTML = product;
    document.body.append(result);

}


function addItem(){
    let name =document.getElementById("name").value;
    let catagory=document.getElementById("catagory").value;
    let quantity=document.getElementById("quantity").value;
    let itemtable=document.getElementById("textable");
    let index=1;
    let row=itemtable.insertRow(index);

    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
     cell1.innerHTML=name;
     cell2.innerHTML=catagory;
     cell3.innerHTML=quantity;
       document.getElementById("name").value="";
      catagory=document.getElementById("catagory").value="";
      quantity=document.getElementById("quantity").value=" ";
      index++;
}