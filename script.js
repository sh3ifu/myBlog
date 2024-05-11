let isUkrainian = false;
    
// function toggleLanguage() {
//     isUkrainian = !isUkrainian;
//     const ukrainianText = document.querySelectorAll('.ukrainian-text');
//     const englishText = document.querySelectorAll('.english-text');

//     if (isUkrainian) {
//         document.getElementById('language-button').src = '/ukraine-flag.png';
//         ukrainianText.forEach(element => {
//             element.style.display = 'block';
//         });
//         englishText.forEach(element => {
//             element.style.display = 'none';
//         });
//     } else {
//         document.getElementById('language-button').src = '/uk-flag.png';
//         ukrainianText.forEach(element => {
//             element.style.display = 'none';
//         });
//         englishText.forEach(element => {
//             element.style.display = 'block';
//         });
//     }
// }

function toggleLanguage() {
    isUkrainian = !isUkrainian;
    const ukrainianElements = document.querySelectorAll('[lang="uk"]');
    const englishElements = document.querySelectorAll('[lang="en"]');

    if (isUkrainian) {
        document.getElementById('language-button').src = 'https://www.dropbox.com/scl/fi/y7y11kj5aw3kafftyw2ml/ukraine-flag.png?rlkey=ozepty6o6lmjdl0pdxesuunl6&st=dbr3238y&dl=1';
        ukrainianElements.forEach(element => {
            element.style.display = 'block';
        });
        englishElements.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        document.getElementById('language-button').src = 'https://www.dropbox.com/scl/fi/r4rrxh63xpe269hsu7nuu/uk-flag.png?rlkey=rr3jxcgchlq43wh81n7ffdapb&st=vkil96ie&dl=1';
        englishElements.forEach(element => {
            element.style.display = 'block';
        });
        ukrainianElements.forEach(element => {
            element.style.display = 'none';
        });
    }
}
