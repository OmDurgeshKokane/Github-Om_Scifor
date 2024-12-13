
let manupulateArray = async (array) =>{
    let newArr =  await array;
    console.log(newArr);
    newArr.push("Volvo");
    console.log(newArr);
    arrayUppercase(newArr);
}

let arrayUppercase =  (array) =>{
    array.forEach(element => {
        let uppercase = element.toUpperCase();
        console.log(uppercase);
    });
}

let input = prompt("Enter the array elements by comma seprated");
let array = input.split(",");

manupulateArray(array);
