let selectElem = document.querySelector('#theme-selector');
let logo = document.querySelector('.logo');

function changeTheme() {
    const body = document.body; 
    const selectedTheme = selectElem.value; 

    if (selectedTheme === 'dark') {
        body.classList.add('dark'); 
        logo.src = 'whitelogo.webp'; 
    } else {
        body.classList.remove('dark'); 
        logo.src = 'logo.webp'; 
    }
}

selectElem.addEventListener('change', changeTheme)