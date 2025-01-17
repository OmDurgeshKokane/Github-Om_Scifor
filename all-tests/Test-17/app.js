let upperCase = (str) =>{
    return str.toUpperCase();
}

let lowerCase = (str) =>{
    return str.toLowerCase();
}

let subString = (str) =>{
    return str.slice(2, 5);
}

const formatString = (str) =>{
    let upperCaseStr = upperCase(str);
    let lowerCaseStr = lowerCase(str);
    let subStringStr = subString(str);

    console.log(upperCaseStr);
    console.log(lowerCaseStr);
    console.log(subStringStr);

}


formatString("Meta Scifor Techonology");


