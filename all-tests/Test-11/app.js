let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");


let manupulateArray = async (array) =>{
    let newArr =  await array;
    console.log(newArr);
    div1.append(newArr);
    newArr.push("Volvo");
    console.log(newArr);
    div2.append(newArr);
    arrayUppercase(newArr);
}

let arrayUppercase = (array) => {
    array.forEach(element => {
        let uppercase = element.toUpperCase(); 
        let uppercaseWithComma = uppercase.split(" ").join(", "); 
        let paragraph = document.createElement("p"); 
        paragraph.textContent = uppercaseWithComma; 
        div3.append(paragraph); 
    });
};

let input = prompt("Enter the array elements by comma seprated");
let array = input.split(",");

manupulateArray(array);
