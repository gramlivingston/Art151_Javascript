//Get Attribute of html element class, href etc...

let link = document.getElementById('link');
let showLink = link.getAttribute('href');
console.log(showLink);


//Set Attribute
link.setAttribute('href','nextPage.html');

//console.log(window)
window.location.replace('nextPage.html')

