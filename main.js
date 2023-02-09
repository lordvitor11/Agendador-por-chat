let name = null;
let btnInput = document.querySelector('#btnInput');
let msgInput = document.querySelector('#msgInput');

function onLoad() {
    document.querySelector('#nome').innerText = name ?? 'visitante';
    document.querySelector('.messageBox').classList.add('initMessage');
    

    msgInput.readOnly = true;
    btnInput.disabled = true;

    let elipsesBox = document.querySelector('.lds-ellipsis');
    let msgBox = document.querySelector('.messageBox');
    let msgContent = document.querySelector('.msgContent');
    let elipses = [
        document.querySelector('.lds-ellipsis div:nth-child(1)'),
        document.querySelector('.lds-ellipsis div:nth-child(2)'),
        document.querySelector('.lds-ellipsis div:nth-child(3)'),
        document.querySelector('.lds-ellipsis div:nth-child(4)'),
    ]

    setTimeout(() => {
        elipses[0].classList.add('move1');
        elipses[1].classList.add('move2');
        elipses[2].classList.add('move2');
        elipses[3].classList.add('move3');
    }, 400);

    setTimeout(() => {
        elipsesBox.style.display = 'none';
        msgBox.classList.remove('initMessage');
        msgBox.classList.add('showMessage');
    }, 5000);

    setTimeout(() => {
        msgContent.style.padding = '10px';
        msgBox.style.width = 'fit-content';
        msgBox.style.height = 'fit-content';
        msgContent.style.alignItems = 'normal';
        msgContent.style.justifyContent = 'left'; 
    }, 5000);

    setTimeout(() => {
        document.querySelector('#msgContent').style.display = 'block';
        msgInput.readOnly = false;
    }, 6000);
}

function showInput() {
    msgInput.readOnly = true;
    btnInput.disabled = true;  

    let msgBoxUser = document.querySelector('#user');
    let msgContent = document.querySelector('.msgContent#user');
    updateName(document.querySelector('#msgInput').value);
    
    document.querySelector('#msgInput').value = '';

    let msg = document.createElement('p')

    msgBoxUser.classList.add('sendMessage');

    setTimeout(() => {
        msg.textContent = name;
        msgContent.appendChild(msg);
        msg.classList.add('fadeIn');
    }, 600);

    // setTimeout(() => {
        
    // }, 650)

    setTimeout(() => {
        msgBoxUser.classList.remove('sendMessage');
        msgBoxUser.style.opacity = '1';
        msgBoxUser.style.width = 'fit-content';
        msgBoxUser.style.height = 'fit-content';
    }, 700);
      
}

function updateName(newName) {
    name = newName;    
}

function onInput() {
    if (msgInput.value.length != 0) {
        btnInput.disabled = false;
    } else {
        btnInput.disabled = true;
    }
}