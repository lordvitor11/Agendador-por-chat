let name = null;

function onLoad() {
    document.querySelector('#nome').innerText = name ?? 'visitante';
    document.querySelector('.messageBox').classList.add('initMessage');

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
    }, 6000);

    
}

function showInput() {
    console.log('showInput');
}
