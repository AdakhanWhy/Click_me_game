let button = document.querySelector('.random__scope button');



function random(){
    button.style = `
        top: ${Math.floor(Math.random() * 70)}vh;
        left: ${Math.ceil(Math.random() * 80)}vw;
    `
}