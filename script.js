
let selectedLanguage = 'en';

function selectLanguage(lang) {
    selectedLanguage = lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('password-section').style.display = 'block';

    if (lang === 'de') {
        document.getElementById('password-title').innerText = 'Bitte gib den Code ein:';
    } else {
        document.getElementById('password-title').innerText = 'Please enter the code:';
    }
}

function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-message');

    if (password === 'Taal2026') {
        document.getElementById('password-section').style.display = 'none';
        if (selectedLanguage === 'de') {
            document.getElementById('content-de').style.display = 'block';
        } else {
            document.getElementById('content-en').style.display = 'block';
        }
    } else {
        errorMsg.innerText = selectedLanguage === 'de' ? 'Falscher Code, bitte versuch es nochmal!' : 'Wrong code, please try again!';
    }
}
