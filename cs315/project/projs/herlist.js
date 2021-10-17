"use strict"

let list1={
              name:"bb",
              price: 4,
               brand:"addidas",
              rating: 3,
                 id:"1",
                 };
  let list2 ={
    name: "Getu",
    brand:"nike",
    price: 5,
    rating: 4,
       id:"2",
        
    };
    
    let list3 = {
      name: "Aa",
      price: 7,
      brand:"nike",
      rating: 2,
         id:"3"
    };
    let list4 =  {
    name: "Cc",
    price: 7,
    brand:"nike",
    rating: 5,
       id:"4",
    };

    let list5 = {
      name: "cc",
      price: 4,
      brand:"nike",
      rating: 1,
         id:"5"
      }
  

  const array1=[list1,list2,list3,list4,list5];

  


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

  
  function filter() {
    console.log(array1);
    let filteredArray = array1.filter((item) =>Number(item.price)>8);
     
    let children = document.getElementById('items').childNodes;
    for (let i = 1; i < children.length; i++){
      let eachTr = children[i];
      console.log(eachTr.children[1]);
      if (Number(eachTr.children[1].innerHTML)<8) {
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




 


  
  