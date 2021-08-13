if(localStorage['username'] || localStorage['password'])
{
    if(localStorage['username'] != 'null' || localStorage['password'] != 'null')
    {
        document.querySelector("#username").value = localStorage['username'];
        document.querySelector("#password-field").value = localStorage['password'];
        document.querySelector("#save-login-checkbox").checked = localStorage['checkbox'];
    }
}

function saveLoginData()
{
    var remember = document.querySelector("#save-login-checkbox").checked;
    if(remember)
    {
        if(document.querySelector("#username").value === "" && document.querySelector("#password-field").value === "")
        {
            localStorage['checkbox'] = "false";
        } else {
            localStorage['checkbox'] = "true";
            localStorage['username'] = document.querySelector("#username").value;
            localStorage['password'] = document.querySelector("#password-field").value
        }
    } else {
        localStorage['checkbox'] = "false";
        localStorage['username'] = null;
        localStorage['password'] = null;
    }
}

const show = document.querySelector("#show-password");
const hide = document.querySelector("#hide-password");
var passwordField = document.getElementById("password-field");

show.onclick = () => {
    show.style.display = "none";
    hide.style.display = "unset";
    passwordField.type = "text";
}

hide.onclick = () => {
    show.style.display = "unset";
    hide.style.display = "none";
    passwordField.type = "password";
}