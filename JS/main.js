// sign up in form =========================================
let userName = document.getElementById( "userName" );
let emailName = document.getElementById( "emailName" );
let emailPassword = document.getElementById( "emailPassword" );
let messageCorrectUp = document.getElementById( "messageCorrectUp" );
let messageIncorrectUp = document.getElementById( "messageIncorrectUp" );
let massageName = document.getElementById( "massageName" );
let RegistrationBtn = document.getElementById( "regBtn" );
let userArray = [];



if (localStorage.getItem("emails") != null)
{
  userArray = JSON.parse(localStorage.getItem( "emails" ));
} else
{
  alert("Local Storage is Empty")
}





// sign up in form ========================================
function Registration ()
{
  let checkResult = validation();
  if (checkResult === true)
  {
    let newUser = {
      name: userName.value,
      email: emailName.value,
      password: emailPassword.value
    }
    userArray.push( newUser );
    localStorage.setItem( "emails" , JSON.stringify(userArray))
    clearFormInput (userName , emailName , emailPassword)
  } else
  {
    alert( checkResult );
  }
} 


// Validation the Input Data for registration :
function validation ()
{
  let regexName = /^[A-Z][a-z]{2,15} [A-Z][a-z]{2,15}$/;
  let regexEmail = /^[A_Za-z-\d_\.]{4,20}@(gmail|yahoo|outlook|hotmail)\.[A-Za-z]{2,5}$/i;
  let regexPassword = /^.{4,10}$/;

  if (regexName.test(userName.value) !== true)
  {
    return "Not valid Name";
  }
  
  else if ( regexEmail.test( emailName.value ) !== true )
  {
    return "Not valid Email";
  }
  
  else if ( regexPassword.test( emailPassword.value ) !== true )
  {
    return "Not valid Password";
  }
  return true
}




// RegistrationBtn.addEventListener("click" , function ()
// {
//   let checkResult = validation();
//   if (checkResult === true)
//   {
//     let newUser = {
//       name: userName.value,
//       email: emailName.value,
//       password: emailPassword.value
//     }
//     userArray.push( newUser );
//     localStorage.setItem( "emails" , JSON.stringify(userArray))
//     clearFormInput()
//     console.log(userArray);
//   } else
//   {
//     alert( checkResult );
//   }
// })



function clearFormInput (name , email , password)
{
  name.value = "";
  email.value = "";
  password.value = "";
}




// sign in to form =========================================
let emailNameIn = document.getElementById( "emailNameIn" );
let emailPasswordIn = document.getElementById( "emailPasswordIn" );
let Login = document.getElementById( "Login" );
let layerDiv = document.getElementById( "layer" );



function checkedInput ()
{
    let flag = false;
    for ( let i = 0; i < userArray.length; i++ )
    {
      if ((userArray[i].email === emailNameIn.value) &&  (userArray[i].password === emailPasswordIn.value))
      {
        flag = true;
        userNameShowDiv = userArray[ i ].name;
      }
    }
    
    if (flag === true)
    {
      clearFormInput ( name , emailNameIn , emailPasswordIn)
      window.open( "index.html" );
    }
    else
    {
      layerDiv.classList.remove("d-none")
    }
}



// function checkedInput ()
// {
//   let textHome = document.getElementById( "textHome" );
//   let arrayName = [];
//   let arrayEmail = [];
//   let arrayPass = [];

//   for ( let i = 0; i < userArray.length; i++ )
//     {
//       arrayName.push (userArray[i].name)
//       arrayEmail.push (userArray[i].email)
//       arrayPass.push (userArray[i].password)
//     }

//   if (arrayEmail.indexOf(emailNameIn.value)  === -1  )
//     {
//       alert("Email in corrected")
//     } else if (arrayPass.indexOf(emailPasswordIn.value)  === -1)
//     {
//       alert("password in corrected")
//     } else
//   {
//     window.open( "index.html" );
//     clearFormLogIn ()

//     // let UserNameHome = `<span> Hello : ${ arrayName[ arrayName[ arrayEmail.indexOf( emailNameIn.value ) ] ] } </span>`;
//     // document.getElementById("textHome").innerHTML = UserNameHome
//   }
  
// }


layerDiv.addEventListener( "click", function (e)
{
  if (e.target.id === "layer")
  {
  this.classList.add("d-none")
  }
} )



