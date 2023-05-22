function error(className,error){
    let element=document.querySelector(`.${className}`)
    element.textContent=error
    valid=false
}
let valid=true

function validate(){
let form=document.getElementsByName("details")[0]
let fname=form.fname.value
let lname=form.lname.value
let email=form.email.value
let contact=form.contact.value
let dob=form.dob.value
let yearNow=(new Date()).getFullYear()
let diff=yearNow-dob.slice(0,4)
let gender=form.gender
let hobbies=Array.from(form.hobbies)
let hobbycheck=false

//validation for fname
if(fname.length<=2)
    error("error-fname","Length of first name is too short")
if(fname.length>=10)
    error("error-fname","Length of first name is too big")
if(/\d/.test(fname))
    error("error-fname","First name should not contain number")

//validation for last name
if(lname.length<=2)
    error("error-lname","Length of last name is too short")
if(lname.length>=10)
    error("error-lname","Length of last name is too big")
if(/[0-9]/.test(lname))
    error("error-lname","last name should not contain number")

//validation for Email
if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))
error("error-email","Please enter email in proper format")

//validation for Contact
if(contact.length<10 || contact.length>10)
    error("error-contact","Length of contact number should be 10 digits")
if(/[a-z]/.test(contact))
    error("error-contact","contact should not contain any letter")

//validation for gender
if(gender[0].checked==false && gender[1].checked==false)
    error("error-gender","Please select gender")

//validation for hobby
hobbies.forEach(hobby => {
    if(hobby.checked==true)
        hobbycheck=true
})
if(!hobbycheck)
error("error-hobby","Please select atleast one hobby")
//validation for age
if(dob=="")
    error("error-dob","Please select age")
else if(diff<18)
    error("error-dob","You are not eligible min age is 18")
else
    ;

return valid
}