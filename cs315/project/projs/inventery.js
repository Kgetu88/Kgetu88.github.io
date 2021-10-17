var array = [];
  var index = 0;

  function addItem() {
    index++;
    var item = {
      id: index, 
      name: document.getElementById("itemName").value,
      category: document.getElementById("category").value,
       quantity: document.getElementById("quantity").value,
        price:document.getElementById("price").value,
        rate:+document.getElementById("rate").value,
    };
    array.push(item);


    let items = document.getElementById("items");
    let tr = document.createElement("tr");
    items.append(tr);
    let nameTd = document.createElement("td");
    nameTd.innerHTML = document.getElementById("itemName").value;
    tr.append(nameTd);

    let categoryTd = document.createElement("td");
    categoryTd.innerHTML = document.getElementById("category").value;
    tr.append(categoryTd);

    let quantityTd = document.createElement("td");
    quantityTd.innerHTML = document.getElementById("quantity").value;
    tr.append(quantityTd);
    let priceTd = document.createElement("td");
    priceTd.innerHTML = document.getElementById("price").value;
    tr.append( priceTd);
    
      let ratingTd = document.createElement("td");
         ratingTd.innerHTML = document.getElementById("rate").value;
        tr.append(ratingTd);
    

    
    let editTd = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Edit";
    button.setAttribute("myId", index);
    button.onclick = function () {
      console.log(this);
      console.log(this.parentNode);
      console.log(this.parentNode.parentNode);
      console.log(this.parentNode.parentNode.childNodes);
      let childNodes = this.parentNode.parentNode.childNodes;

      document.getElementById("itemName").value = 1
      document.getElementById("category").value = 2
      document.getElementById("quantity").value =3
      document.getElementById("price").value = 4

      let myId = this.getAttribute("myId");
      array.forEach(function (item) {
        if (item.id == myId) {
          item.name = document.getElementById("itemName").value;
          item.category = document.getElementById("category").value;
          item.quantity = document.getElementById("quantity").value;
          item.price=document.getElementById("price").value;
        }
      });

    }
    editTd.append(button);
    tr.append(editTd);

    let td = document.createElement("td");
    let deleteButton = document.createElement("button");
    button.setAttribute("myId", index);
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
      let myId = this.getAttribute("myId")
      console.log(this.getAttribute("myId"));
      array = array.filter((item) => item.id != myId);

      console.log(this.parentNode.parentNode);
      this.parentNode.parentNode.remove();

    }
    td.append(deleteButton);
    tr.append(td);

  
    for(let list of array){
      let item=list.document.getElementById("price").price;
  ;
       if(isNaN(item)){
        turnRed(item)
             }
       }




  }
  // function filter() {
  //   console.log(array);
  //   let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  //   let children = document.getElementById('items').childNodes;
  //   for (let i = 2; i < children.length; i++) {
  //     let eachTr = children[i];
  //     console.log(eachTr.children[2]);
  //     if (Number(eachTr.children[2].innerHTML) < 100) {
  //       eachTr.style.display = "none";
  //     }

  //   }
  // }
  // }
  // filter by rating
  function filter() {
    console.log(array);
    let filteredArray = array.filter((item) => Number(item.rate)>4);
     
    let children = document.getElementById('items').childNodes;
    for (let i = 4; i < children.length; i++){
      let eachTr = children[i];
      console.log(eachTr.children[4]);
      if (Number(eachTr.children[4].innerHTML)<4) {
        eachTr.style.display = "none";
      }

    }
  }


  // function clearFilter() {
  //   console.log(array);
  //   let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  //   let children = document.getElementById('items').childNodes;
  //   for (let i = 2; i <body.children.length; i++) {
  //     let eachTr = children[i];
  //     console.log(eachTr.children[2]);
  //     eachTr.style.display = "";
  //   }
    
  // }
  // function filter() {
  //   console.log(array);
  //   let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  //   let children = document.getElementById('items').childNodes;
  //   for (let i = 2; i < children.length; i++) {
  //     let eachTr = children[i];
  //     console.log(eachTr.children[2]);
  //     if (Number(eachTr.children[2].innerHTML) < 100) {
  //       eachTr.style.display = "none";
  //     }

  //   }
  // }

  function clearFilter() {
    console.log(array);
    let filteredArray = array.filter((item) => Number(item.quantity) > 100);
    let children = document.getElementById('items').childNodes;
    for (let i = 2; i < children.length; i++) {
      let eachTr = children[i];
      console.log(eachTr.children[2]);
      eachTr.style.display = "";
    }

  }

  function turnRed(infield){
    infield.style.backgroundColor="red";
      
  }