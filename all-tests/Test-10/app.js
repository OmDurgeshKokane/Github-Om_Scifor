let divElement = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    divElement.append(randomJoke())
})

async function randomJoke(){
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    const finalData = res.data.value;
}