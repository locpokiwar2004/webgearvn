const formOpenBtn = document.querySelector('#form-open-log'),
home = document.querySelector('.home-modal')
home1 = document.querySelector('#home-m'),
modal=document.querySelector('.modal')
formcloseBTN = document.querySelector('.form-close'),
registerBtn = document.querySelector('#form-open-reg'),
register =document.querySelector('#logto-reg'),
login =document.querySelector('#regto-log')
var change = document.getElementsByClassName("change-text")
register.addEventListener('click', ()=> {   
    modal.classList.add('active');
})
login.addEventListener('click', ()=> {
    modal.classList.remove('active');
})
formOpenBtn.addEventListener('click', ()=> {
    home.classList.add('show');
})
formcloseBTN.addEventListener('click', ()=> {
    home.classList.remove('show');
})
registerBtn.addEventListener('click', ()=> {
    home.classList.add('showre');
})
formcloseBTN.addEventListener('click', ()=> {
    home.classList.remove('showre');
})

