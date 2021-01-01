const getForm = document.querySelector('#getform');
getForm.addEventListener('click', event => {
    if (event.target.tagName != 'BUTTON') return;
    getUserInput = getForm.querySelector('input').value
    console.log(getUserInput)
    getForm.setAttribute('action',`/users/${getUserInput}`)
});
//num is the the highest possible value for field.
function selectGen (field, num, isZeroIndex){
    let zeroAdjust = 0;
    if (isZeroIndex){
        zeroAdjust = -1;
    }
    for (let i = 1 + zeroAdjust; i < 1 + num + zeroAdjust; i++){
        let option = document.createElement('option');
        option.setAttribute('value', `${i}`);
        option.innerText = `${i-zeroAdjust}`;
        document.querySelector(`#${field}-selector`).appendChild(option);
    }
}
//document.querySelector('#postform').setAttribute('action', '/workplz')

function main (){
    //selectGen('month', 12, true);
    //selectGen('day', 31, false)
}

main();

