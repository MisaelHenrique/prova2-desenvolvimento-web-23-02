function validation(){
    const email = document.querySelector('#email');
    const pass = document.querySelector('#pass');

    if(email = ''){
        const msg = document.querySelector('.msg')
        msg.innerHTML = 'Campo vazio'
        msg.style.color = red
    }else if(pass = ''){
        const msg = document.querySelector('.msg')
        msg.innerHTML = 'Campo vazio'
        msg.style.color = red
    }
}