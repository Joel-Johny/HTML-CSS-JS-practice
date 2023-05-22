function fetchMe(){
    const list=document.getElementsByClassName("list")[0]
    
    const task=document.getElementById("task").value
    const element=document.createElement("div")
    
    const iconContainer=document.createElement("div")
    iconContainer.className="iconContainer"
    const text=document.createElement("p")
    text.textContent=task
    
    const bin=document.createElement("img")
    bin.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LtNp6G7vbmoZ_iZbdE90B1kevxetVjEf5gVTYIzo3GjJ0Zf3gRe3haN6j7QExHON_M4&usqp=CAU"
    bin.classList.add("icons")
    
    const check=document.createElement("img")
    check.src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
    check.classList.add("icons")
    
    element.appendChild(text)
    iconContainer.appendChild(bin)
    iconContainer.appendChild(check)
    
    element.appendChild(iconContainer)
    check.addEventListener("click",(event)=>{
      const parent=event.target.parentNode.parentNode
      const textNode=(parent.childNodes[0])
      textNode.classList.toggle("strike")
      
    })
    
      bin.addEventListener("click",(event)=>{
      const parent=event.target.parentNode.parentNode
      parent.remove()
      const length=document.getElementsByClassName("list")[0].children.length
      if(length==0)
        condtion()
    })
    
    
    
    element.classList.add("list-item")
    
    list.style.display="block"
    
    
    
    
    list.appendChild(element)
    
  }
  
  function deleteAll(){
    const allTask=document.getElementsByClassName("list")[0]
    allTask.textContent=""
    condtion()
  }
  
  function condtion(){
    document.getElementsByClassName("list")[0].style.display="none"
  }
  condtion()