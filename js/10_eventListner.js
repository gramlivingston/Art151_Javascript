//an event listern is a method that attaches to a DOM object and waits for interaction

//hello world

let h1 = document.getElementById('headerOne');
h1.addEventListener("click", function(){
    console.log('Hello World');
})


//You can add multiple event listeners to a single object

h1.addEventListener("mouseover", function(){
    document.body.style.color = 'aqua';
})


console.log(window)
