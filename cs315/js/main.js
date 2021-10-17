/*"use strict"
const list = document.querySelector(".list");
const sort_name_btn = document.querySelector(".sort-options.sort-name");
const sort_meta_btn = document.querySelector(".sort-options.sort-meta");
const sort_age_btn = document.querySelector(".sort-options.sort.age");
console.log(list);

let list_items = [
    {
        name: "Getu",
        meta: "butman",
        age: "34"
    },
    {
        name: "safu",
        meta: "xxx",
        age: "40"
    },
    {
        name: "Tekle",
        meta: "bbbb",
        age: "36"
    },
    {
        name: "Israel",
        meta: "abcc",
        age: "33"
    },
    {
        name: "Dany",
        meta: "yes",
        age: "45"
    },

];

    constlist = document.querySelector(".list");
constsort_name_btn = document.querySelector(".sort-options.sort-name");
constsort_meta_btn = document.querySelector(".sort-options.sort-meta");
constsort_age_btn = document.querySelector(".sort-options.sort.age");
console.log(list);
letlist_items = [
    {​​​
name:"Getu",
meta:"butman",
age:"34"
    }​​​,
    {​​​
name:"safu",
meta:"xxx",
age:"40"
    }​​​,
    {​​​
name:"Tekle",
meta:"bbbb",
age:"36"
    }​​​,
    {​​​
name:"Israel",
meta:"abcc",
age:"33"
    }​​​,
    {​​​
name:"Dany",
meta:"yes",
age:"45"
    }​​​,
];
letdesc = false;
sort_name_btn.addEventListener("click", () => {​​​
letarray = sort_array_by(list_items, "name", desc);
displaylist(array);
desc = !desc;
}​​​);
sort_meta_btn.addEventListener("click", () => {​​​
letarray = sort_array_by(list_items, "meta", desc);
displaylist(array);
desc = !desc;
}​​​);
​
    sort_age_btn.addEventListener("click", () => {​​​
letarray = sort_array_by(list_items, "age", desc);
displaylist(array);
desc = !desc;
}​​​);
function sort_array_by(array, sort, desc) {​​​
array.sort(function (a, b) {​​​
if (a[sort] < b[sort]) return -1;
else if (a[sort] > b[sort]) return 1;
else 
 return 0;
    }​​​);
if (desc) array.reverse();
return array;
}

​​​
function displaylist(array=[]){​​​
        list.innerHTML + "";
for (leti = 0; i < array.length; i++) {​​​
letitem = array[i];
letitem_element = document.createElement("div");
item_element.classList.add("list-item");
lettitle = document.createElement("div");
title.classList.add("item-title");
title.innerText = item.name;
item_element.appendChild(title);
letmeta = document.createElement("div");
meta.classList.add("item-meta");
meta.innerText = item.meta;
item_element.appendChild(meta);
letage = document.createElement("div");
age.classList.add("item-age");
age.innerText = item.age;
item_element.appendChild(age);
list.appendChild(item_element);
    }​​​
}

​​​
   displaylist(list_items);
*/