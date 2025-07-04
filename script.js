function submit(){
    debugger
    var fname=document.getElementById('fname')
    var lname=document.getElementById('lname')
    var Fullname=fname.value+" "+lname.value
    console.log(Fullname)
    var email=document.getElementById('email')
    var Address=document.getElementById('Address')
    var emailAddress=email.value+" "+Address.value
    console.log(emailAddress)
}
