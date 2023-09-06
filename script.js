function validation_fn() {
    

  const pass = document.querySelector("#password").value;
  const conform_pass = document.querySelector("#confirm-password").value;
  const confirm_value = document.querySelector("#confirm-password");
  const pass_value = document.querySelector("#password");
  const confirm_box = document.querySelector("#confirm-password");
  const errormessage =document.querySelector('#message');
  const active_box=document.querySelector('input:focus');
  if (pass == conform_pass) {
    confirm_value.classList.remove("errorclass");
    pass_value.classList.remove("errorclass");
    confirm_box.classList.remove('errorclass');
    errormessage.innerHTML='';
    active_box.setAttribute('style','border:2px solid blue');
    
  }
  else{
    
    active_box.setAttribute('style','border:2px solid red');
    confirm_box.classList.add("errorclass");
    confirm_value.classList.add("errorclass");
    pass_value.classList.add("errorclass");
    errormessage.innerHTML='*passwords are not matching';

    
    // error_message.textContent="* passwords do not match";
    // error_message.classList.add('errormessage');
    // password_one.appendChild(error_message);
  }
}