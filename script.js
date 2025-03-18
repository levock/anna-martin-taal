
let selectedLanguage='en';
function selectLanguage(l){selectedLanguage=l,document.getElementById("language-selection").style.display="none",
document.getElementById("password-section").style.display="block",
document.getElementById("password-title").innerText="de"===l?"Bitte gib den Code ein:":"Please enter the code:";}
function checkPassword(){const e=document.getElementById("password-input").value.toLowerCase();
"taal2026"===e?(document.getElementById("password-section").style.display="none",
document.getElementById("content-"+selectedLanguage).style.display="block"):
document.getElementById("error-message").innerText="de"===selectedLanguage?"Falscher Code!":"Incorrect code!";}
