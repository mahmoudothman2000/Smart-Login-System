//todo home page =========================================
let textHome = document.getElementById( "textHome" );
let sendEmail = document.getElementById( "sendEmail" );

//todo sign in to form =========================================
let emailNameIn = document.getElementById( "emailNameIn" );
let msgEmailIn = document.getElementById( "msgEmailIn" );

let emailPasswordIn = document.getElementById( "emailPasswordIn" );
let msgPassIn = document.getElementById( "msgPassIn" );

let Login = document.getElementById( "Login" );


// //todo sign up in form =========================================
let userName = document.getElementById( "userName" );
let msgNameUp = document.getElementById( "msgNameUp" );

let emailName = document.getElementById( "emailName" );
let msgEmailUp = document.getElementById( "msgEmailUp" );

let phoneNumber = document.getElementById( "phoneNumber" );
let msgPhoneUp = document.getElementById( "msgPhoneUp" );

let emailPassword = document.getElementById( "emailPassword" );
let msgPassUp = document.getElementById( "msgPassUp" );

let emailPasswordConfirm = document.getElementById( "emailPasswordConfirm" );
let msgPassConfirm = document.getElementById( "msgPassConfirm" );

let RegBtn = document.getElementById( "regBtn" );


let userArray = [];
let currentName;
let currentEmail;

//Todo : Get Data in LocalStorage .
if (localStorage.getItem("users") != null)
{
  userArray = JSON.parse(localStorage.getItem( "users" ));
} else
{
  alert("Local Storage is Empty")
}



//Todo : Function Create User by registration ==> SignUp Page:
if ( RegBtn !== null )
{
  RegBtn.addEventListener( "click", function ()
  {

    let nameValid = false;
    let emailValid = false;
    let phoneNum = false;
    let passValid = false;
    let passConfirmValid = false;
    
    if (NotExistingEmail() !== true)
    {
      if (validationName() === true)
      {
        nameValid = true;
        userName.style.cssText = "border-color: #86b7fe; box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);"
        clearMsg(msgNameUp)
      } else
      {
        displayMsg( msgNameUp, "Not name Valid" );
        userName.style.cssText = "border-color: #ff0000 !important; box-shadow: 0 0 0 0.25rem rgba(255,0,0,.25) !important; "
      }
    
      if (validationEmail() === true)
      {
        emailValid = true;
        emailName.style.cssText = "border-color: #86b7fe; box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);"
        clearMsg(msgEmailUp)
      } else
      {
        displayMsg( msgEmailUp, "Not Email Valid" );
        emailName.style.cssText = "border-color: #ff0000 !important; box-shadow: 0 0 0 0.25rem rgba(255,0,0,.25) !important; "
      }

      if (validationPhoneNumber () === true)
      {
        phoneNum = true;
        phoneNumber.style.cssText = "border-color: #86b7fe; box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);"
        clearMsg(msgPhoneUp)
      } else
      {
        displayMsg( msgPhoneUp, "The Phone Number is Incorrect" );
        phoneNumber.style.cssText = "border-color: #ff0000 !important; box-shadow: 0 0 0 0.25rem rgba(255,0,0,.25) !important; "
      }
      
      
      if (validationPassword() === true)
      {
        passValid = true;
        emailPassword.style.cssText = "border-color: #86b7fe; box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);"
        clearMsg(msgPassUp)
      } else
      {
        displayMsg( msgPassUp, "Not Password Valid" );
        emailPassword.style.cssText = "border-color: #ff0000 !important; box-shadow: 0 0 0 0.25rem rgba(255,0,0,.25) !important; "
      }
      
      
      if (validationPasswordConfirmed() === true)
      {
        passConfirmValid = true;
        emailPasswordConfirm.style.cssText = "border-color: #86b7fe; box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);"
        clearMsg(msgPassConfirm)
      } else
      {
        displayMsg( msgPassConfirm, "The Password is Incorrect" );
        emailPasswordConfirm.style.cssText = "border-color: #ff0000 !important; box-shadow: 0 0 0 0.25rem rgba(255,0,0,.25) !important; "
      }
      

      if ( nameValid && emailValid  && phoneNum && passValid && passConfirmValid )
      {
        userName.style.cssText = "border: var(--bs-border-width) solid var(--bs-border-color); box-shadow: 0 0 0 0 transparent;"
        emailName.style.cssText = "border: var(--bs-border-width) solid var(--bs-border-color); box-shadow: 0 0 0 0 transparent;"
        phoneNumber.style.cssText = "border: var(--bs-border-width) solid var(--bs-border-color); box-shadow: 0 0 0 0 transparent;"
        emailPassword.style.cssText = "border: var(--bs-border-width) solid var(--bs-border-color); box-shadow: 0 0 0 0 transparent;"
        emailPasswordConfirm.style.cssText = "border: var(--bs-border-width) solid var(--bs-border-color); box-shadow: 0 0 0 0 transparent;"
        createUser()
        alert("The registration is Correct ")
      }
    } else
    {
      displayMsg( msgEmailUp, "The Email is Repeated" )
    }
    
    // if ( NotExistingEmail() !== true )
    // {
    //   if ( validationName() !== true )
    //   {
    //     displayMsg( msgNameUp, "not name Valid" )
    //     clearMsg( msgNameUp)
    //   } else if ( validationEmail() !== true )
    //   {
    //     displayMsg( msgEmailUp, "not Email Valid" )
    //     clearMsg( msgEmailUp)
    //   } else if ( validationPassword() !== true )
    //   {
    //     displayMsg( msgPassUp, "not Password Valid" )
    //     clearMsg( msgPassUp)
    //   } else
    //   {
    //     createUser()
    //   }
    // } else
    // {
    //   displayMsg( msgEmailUp, "Repeated Email" )
    //   clearMsg( msgEmailUp );
    // }
  } )
}


//Todo : Function do Login success ==> SignIn Page:
if ( Login !== null )
{
  Login.addEventListener( "click", function ()
  {
    if ( checkEmail() )
    {
      window.open( "home.html", "_self" );
      // currentName = JSON.parse( localStorage.getItem( "currentName" ) )
      // currentEmail = JSON.parse( localStorage.getItem( "currentName" ) )
      console.log("gooood");
      // clearFormInput (emailNameIn , emailPasswordIn)
    }
  })
}


//Todo : Function display user name in the home page when email is validated ==> Home Page:
if (textHome !== null) {
  currentName = JSON.parse(localStorage.getItem("currentName"));
  displayMsg(textHome ,`Welcome :  ${currentName}`
  );
}




//Todo Function Create User and Save data In Array Of Object by registration :
function createUser ()
{
let newUser = {
  name: userName.value,
  email: emailName.value,
  phone: phoneNumber.value,
  password: emailPassword.value
}
userArray.push( newUser );
localStorage.setItem( "users", JSON.stringify( userArray ) )
clearFormInput (userName , emailName , phoneNumber , emailPassword , emailPasswordConfirm)
}


//Todo Function Validation Name the Input Data for registration :
function validationName ()
{
  let regexName = /^[A-Z][a-z]{2,15} [A-Z][a-z]{2,15}$/;
  if (regexName.test(userName.value) === true)
  {
    return true;
    // return "Not valid Name";
  }
}


//Todo Function Validation Email the Input Data for registration :
function validationEmail ()
{
  let regexEmail = /^[A_Za-z-\d_\.]{4,20}@(gmail|yahoo|outlook|hotmail)\.[A-Za-z]{2,5}$/i;
  if ( regexEmail.test( emailName.value ) === true )
  {
    return true;
    // return "Not valid Email";
  }
}


//Todo Function Validation Phone Number the Input Data for registration :
function validationPhoneNumber ()
{
  let regexEmail = /^(002)?01[0125][0-9]{8}$/i;
  if ( regexEmail.test( phoneNumber.value ) === true  )
  {
    return true;
    // return "Not valid Email";
  }
}


//Todo Function Validation Password the Input Data for registration :
function validationPassword()
{
  let regexPassword = /^.{4,10}$/;
  if ( regexPassword.test( emailPassword.value ) === true )
  {
    return true;
    // return "Not valid Password";
  }
}


//Todo Function Validation Password Confirmed the Input Data for registration :
function validationPasswordConfirmed()
{
  if ( emailPassword.value === emailPasswordConfirm.value )
  {
    return true;
    // return "Not valid Password Confirmed";
  }
}


//Todo Function clear the Input Data in form :
function clearFormInput (name , email , phone , password , passConfirm)
{
  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  passConfirm.value = "";
}


//Todo Function Display the Message Error in page :
function displayMsg (element , message)
{
  element.innerHTML = message;
}


//Todo Function Display the Message Error in page :
function clearMsg (element)
{
  element.innerHTML = "";
}


//Todo Function do prevents user from creating duplicate accounts
function NotExistingEmail ()
{
  for ( let i = 0; i < userArray.length; i++)
  {
    if (emailName.value === userArray[ i ].email)
    {
      return true;
    }
  }
}


//Todo Function check Function the Email and Password in Array :
function checkEmail ()
{
  let flagEmail = false;
  let flagPassword = false;
  
  for ( let i = 0; i < userArray.length; i++ )
  {
    console.log( userArray[ i ] );
    if ( userArray[ i ].email === emailNameIn.value )
    {
      flagEmail = true;
      clearMsg( msgEmailIn )
    } else { displayMsg( msgEmailIn, "Email incorrect" ) };
    
    if ( userArray[ i ].password === emailPasswordIn.value )
    {
      flagPassword = true;
      clearMsg( msgPassIn )
    } else { displayMsg( msgPassIn, "Password incorrect" ) };

    if ( flagEmail && flagPassword )
    {
      currentName = userArray[ i ].name;
      currentEmail = userArray[ i ].email;
      localStorage.setItem("currentName" ,JSON.stringify(currentName) )
      localStorage.setItem("currentEmail" ,JSON.stringify(currentEmail) )
      return true;
    }
  }
}
