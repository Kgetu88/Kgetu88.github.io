
"use strict"

let overAll={
  name:"Food dispenser",
  price: 20,
   brand:"pet feeder",
  rating: 4,
     id:"1",
     };
let shirt ={
name: "Pet Toy",
brand:"Pet toy",
price: 15,
rating: 3,
id:"2",  

};

let gymThermal = {
name: "Dog Food",
price: 8,
brand:"Dog's Nutrtion",
rating: 2,
id:"3"
};
let brownLeatherJacket=  {
name: "Dog Cuddler",
price:33,
brand:"pet cuddle",
rating: 5,
id:"2",
};




const array1=[overAll,shirt,gymThermal,brownLeatherJacket];


  function addItem() {
    
   
       for(let i=0;i<array1.length;i++){
        let items = document.getElementById("items");
        let tr = document.createElement("tr");
        items.append(tr);
        
       
         let element=array1[i];
     let nameTd = document.createElement("td");
      nameTd.innerHTML =element.name; 
      tr.append(nameTd);

    
    let priceTd = document.createElement("td");
    priceTd.innerHTML =element.price;
    tr.append( priceTd);

    let brandTd = document.createElement("td");
    brandTd.innerHTML =element.brand;
    tr.append(brandTd);
    
      let ratingTd = document.createElement("td");
         ratingTd.innerHTML =element.rating;
        tr.append(ratingTd);
        let idTd = document.createElement("td");
         idTd.innerHTML =element.id;
       tr.append( idTd);
       }

      }

  
      function filterPrice() {
        array1.sort(function(a, b){return a.price - b.price});
        
        let children = document.getElementById('items').childNodes;
        for (let i = 3; i < children.length; i++){
           let eachTr = children[i];
          console.log(eachTr.children[3]);
          if (Number(eachTr.children[3].innerHTML)<3) {
             eachTr.style.display = "none";
          }
    
        }
      
      }
  function filterRate(){
    console.log(array1);
    let filteredArray = array1.filter((item) => Number(item.rating)>3);
     
    let children = document.getElementById('items').childNodes;
    for (let i = 3; i < children.length; i++){
      let eachTr = children[i];
      console.log(eachTr.children[3]);
      if (Number(eachTr.children[3].innerHTML)<3) {
        eachTr.style.display = "none";
      }

    } 
  }

  function filterId(){
    console.log(array1);
    let filteredArray = array1.filter((item) => Number(item.id)>3);
     
    let children = document.getElementById('items').childNodes;
    for (let i = 4; i < children.length; i++){
      let eachTr = children[i];
      console.log(eachTr.children[4]);
      if (Number(eachTr.children[4].innerHTML)<3) {
        eachTr.style.display = "none";
      }

    } 

  }

  function clearFilter() {
    console.log(array1);
    let filteredArray = array1.filter((item) => Number(item.price)>8);
    let children = document.getElementById('items').childNodes;
    for (let i = 1; i < children.length; i++) {
      let eachTr = children[i];
      console.log(eachTr.children[1]);
      eachTr.style.display = "";
    }

  }

  function clearFilter() {
    console.log(array1);
    let filteredArray = array1.filter((item) => Number(item.rating) >3);
    let children = document.getElementById('items').childNodes;
    for (let i = 3; i < children.length; i++) {
      let eachTr = children[i];
      console.log(eachTr.children[3]);
      eachTr.style.display = "";
    }

  }

  function clearFilter() {
    console.log(array1);
    let filteredArray = array1.filter((item) => Number(item.id) >3);
    let children = document.getElementById('items').childNodes;
    for (let i = 4; i < children.length; i++) {
      let eachTr = children[i];
      console.log(eachTr.children[4]);
      eachTr.style.display = "";
    }

  }
