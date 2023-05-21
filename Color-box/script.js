function handler(e){
    const elements=Array.from(document.querySelectorAll(".box"))
    elements.map((element)=>{
        
        element.classList.add("defaultColor")
    })
    const clicked=e.target.id
    const even=[2,4,6]
    const odd=[1,3,5,7]

    if(clicked%2==0){
        even.map((id)=>{
            const element=document.getElementById(id)
            element.classList.remove("defaultColor")
            element.classList.add("changeColor")
        })
    }


    else{
        odd.map((id)=>{
            const element=document.getElementById(id)
            element.classList.remove("defaultColor")
            element.classList.add("changeColor")

        })

    }
    //removing is necessary if you dont then default class will have more priority over change class
}

// another way of doing is using this instead of event this will fetch the element only like e.target does
//then over the element we can add or remove class list or even use the elment.style.property attribute