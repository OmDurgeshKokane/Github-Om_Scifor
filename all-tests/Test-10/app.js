let divElement = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    divElement.innerText = ""
    const data = await randomJoke()
    divElement.append(data);
})

async function randomJoke(){
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    const finalData = res.data.value;
    return finalData
}