const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

console.log(bar);
console.log(close);
console.log(nav);

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("bar"); 
    })
}
if(close){
   close.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("close"); 
      })
}
console.log(bar);

