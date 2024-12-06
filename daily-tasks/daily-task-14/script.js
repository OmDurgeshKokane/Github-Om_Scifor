let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener('click', ()=>{
    let input = inp.value;
    if(input === ""){
        console.log("Enter some value");
        return;
    }
    fetchApi(input);
})


async function fetchApi(input){
    fetch(`https://dummyjson.com/products/search?q=${input}`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        for(product of data.products){
            console.log(product.title);
        }
    })
}