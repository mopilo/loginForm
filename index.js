var form  = document.getElementsByTagName('form')[0];



form.addEventListener("submit", function (event) {
  
  event.preventDefault();
  pass();

});

function pass()
{
    var email = document.getElementById('mail').value;
    var password = document.getElementById('psw').value;
    var error = document.querySelector('.error');

    var passwordRegex = /^(?=.*\d)(?=.*[a-z])\w{6,}$/;
    var emaiRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(password == "" && email == "") 
    {
        error.innerHTML = "field can't be blank";
        error.className = "error active";
          return false;
    }
     else if(!passwordRegex.test(password)) {
        error.innerHTML = "Passowrd must contain atleast a numbers!";
          error.className = " error active";
          return false;
    }

    else if(!emaiRegex.test(email))
    {
        error.innerHTML = "Invalid email";
          error.className = " error active";
          return false;
    }
    else
    {
        alert("Successful")
        error.innerHTML = ""
        error.className = "error"
        form.reset();
    }


}