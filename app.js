const myinput = document.querySelector('#email');
const button = document.querySelector('#btn-submit');
const errorMessage = document.querySelector('.message');

button.addEventListener ('click',function(e){
    e.preventDefault();


    if(myinput.value == ''){
        errorMessage.innerHTML = 'please provide a valid email ';
        errorMessage.innerHTML.style.color ('hsl(354, 100%, 66%') ;
        return false;
    }else{
        errorMessage.innerHTML = '';
        return true;
    }
});