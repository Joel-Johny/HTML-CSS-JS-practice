function handler(e){
    const elements=Array.from(document.querySelectorAll(".box"))
    elements.map((element)=>{
        
        element.classList.add("defaultColor")
    })
    e.target.classList.remove("defaultColor")
    e.target.classList.add("changeColor")
    //removing is necessary if you dont then default class will have more priority over change class
}

// another way of doing is using this instead of event this will fetch the element only like e.target does
//then over the element we can add or remove class list or even use the elment.style.property attribute