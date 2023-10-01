const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const del = document.querySelector(".del");
const point = document.querySelector(".point");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");


numbers.forEach(number => {
    number.addEventListener("click", () =>{
        result.textContent += number.textContent;
    })
});

operations.forEach(operation => {
    operation.addEventListener("click", () =>{
        result.textContent += operation.textContent;
    })
});

point.addEventListener("click", () =>{
    result.textContent += point.textContent;
})

reset.addEventListener("click", () => {
    result.textContent = "";
})

del.addEventListener("click", () =>{
    let newText = result.textContent.substring(0, result.textContent.length - 1);
    result.textContent = newText;
})

equal.addEventListener("click", () =>{
    try {
        result.textContent= eval(result.textContent);
    } 
    catch (error) {
        result.textContent = "Error";
    }
})




