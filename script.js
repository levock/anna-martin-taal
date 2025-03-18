
let selectedLanguage = 'en';

function selectLanguage(lang) {
    selectedLanguage = lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('password-section').style.display = 'block';
    document.getElementById('password-title').innerText = lang === 'de' ? 'Bitte gib den Code ein:' : 'Please enter the code:';
}

function checkPassword() {
    const pw = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-message');
    if (pw === 'Taal2026') {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('content-' + selectedLanguage).style.display = 'block';
    } else {
        errorMsg.innerText = selectedLanguage === 'de' ? 'Falscher Code!' : 'Incorrect code!';
    }
}
