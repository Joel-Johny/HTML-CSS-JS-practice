
function thirdChar(){
    const input2=Array.from(document.getElementById("input2").value)

    const result2=document.getElementById("result2")
    let final=[]
    input2.forEach((char,index)=>{
        let j=index+1
        if(j%3==0)
            ;
        else
            final.push(char)
    })

    final=final.join("")
    console.log(final)
    result2.textContent=final
}