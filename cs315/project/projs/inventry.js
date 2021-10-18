



"use strict"

let tv={
  name:"TV",
  price: 360,
   brand:"Samsung",
  rating: 4,
     id:"1",
     };
let mobilePhone ={
name: "Mobile phone",
price: 180,
brand:"Motorola",

rating: 3,
id:"2",  

};

let drone = {
name: "Drone",
price: 89,
brand:"4DVR RC Drone",
rating: 2,
id:"3"
};
let tablet=  {
name: "Tablet",
price:150,
brand:"Fire HD Tablet",
rating: 1,
id:"4",
};
let wristJewllery={
  name:"Wrist jewllery",
  price: 61,
   brand:"Hand Made",
  rating: 4,
     id:"1",
     };
let neckless ={
name: "Neckless",
price: 40,
brand:"Crystal",

rating: 3,
id:"2",  

};

let earRing = {
name: "Ear ring",
price: 16,
brand:"Flower",
rating: 2,
id:"3"
};

let ring=  {
  name: "Ring",
  price:25,
  brand:"Silver ear rings",
  rating: 4,
  id:"2",
  };
  
let dispenser={
  name:"Food dispenser",
  price: 20,
   brand:"pet feeder",
  rating: 4,
     id:"1",
     };
let toy ={
name: "Pet Toy",
price: 15,
brand:"Pet toy",

rating: 3,
id:"2",  

};

let food = {
name: "Dog Food",
price: 8,
brand:"Dog's Nutrtion",
rating: 2,
id:"3"
};
let cuddler=  {
name: "Dog Cuddler",
price:33,
brand:"pet cuddle",
rating: 4,
id:"2",
};

let dress={
  name:"Dress",
  price: 25,
   brand:"Banana Republic",
  rating: 4,
     id:3,
     };
let longSweater ={
name: "long Sweater",
price: 33,
brand:"H&M",

rating: 3,
id:2,  

};

let  sweater= {
name: "Sweater",
price: 81,
brand:"nike",
rating:4,
id:4
};
let jacket=  {
name: "ladies Jacet",
price:46,
brand:"leathers",
rating: 4,
id:1,
};

let blue={
  name:"Blue over all",
  price: 46,
   brand:"Versace",
  rating: 4,
     id:"1",
     };
let slim ={
name: "Male Slim Fit Shirt",
brand:"H&M",
price: 33,
rating: 3,
id:"2",  

};

let gym = {
name: "Gym Thermal",
price: 25,
brand:"nike",
rating: 2,
id:"3"
};
let brownLeatherJacket=  {
name: "Brown Leather Jacket",
price:91,
brand:"leathers",
rating: 4,
id:"2",
};


const array1=[tv,mobilePhone,drone,tablet,wristJewllery,neckless,earRing,ring,dispenser,toy,food,cuddler,dress,longSweater,sweater,jacket,blue,gym,brownLeatherJacket];

  


  function addItem(){
    
   
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
    let filteredArray = array1.filter((item) =>(item.rating)>3);
     
    let children = document.getElementById('items').childNodes;
    for (let i = 3; i < children.length; i++){
      let eachTr = children[i];
      console.log(eachTr.children[3]);
      if((eachTr.children[3].innerHTML)<3){
        eachTr.style.display = "none";
      }

    }
  }
  

  function clearFilter() {
    console.log(array1);
    let filteredArray = array1.filter((item) => (item.rating)>3);
    let children = document.getElementById('items').childNodes;
    for (let i = 3; i < children.length; i++) {
      let eachTr = children[i];
      console.log(eachTr.children[3]);
      eachTr.style.display = "";
    }

  }

  