// methods for accessing elements on your html page
// Assign to variable


//Get By ID
let h1 = document.getElementById('headerOne');
h1.style.color = 'blue';
h1.style.backgroundColor = 'grey';



//Get By Tag Name
let headingsTwo = document.getElementsByTagName('h2');
console.log(headingsTwo);


//navigate multiple elements like an array
headingsTwo[0].style.color = 'red';


let listItems = document.getElementsByTagName('li');
console.log(listItems[2].textContent);
listItems[2].textContent = 'Third Item';
//console.log(listItems);






//If you want to iterate over dom objects with for each loop you need to change the data type

//Spread opperator
let listItemsClone = [...listItems];

listItemsClone.forEach(function(item){
    console.log(item);
})
