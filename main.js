

var nameInput = document.querySelector('.name');
var btn = document.querySelector('.btn');
var question = document.querySelector('.question');
var signup = document.querySelector('.signup');
var emailInput = document.querySelector('.e-mail');
var PassInput = document.querySelector('.pass');
var userMsg = document.querySelector('.userMsg');
var layer=document.querySelector('.layer');
var mainpage=document.querySelector('.mainpage');
var welcomeName=document.querySelector('.welcomeName');

function displayElements() {
    clear();
    if (signup.innerHTML == 'SignUp') {
        nameInput.classList.remove('d-none');
        btn.innerHTML = 'SignUp';
        question.innerHTML = 'You have an account?';
        signup.innerHTML='Signin';
        userMsg.innerHTML='';
    }
    else if (signup.innerHTML == 'Signin'){
        nameInput.classList.add('d-none');
        btn.innerHTML ='Login';
        question.innerHTML = 'Don’t have an account?';
        signup.innerHTML='SignUp';
        userMsg.innerHTML='';
    }
}

var allemails = [];//mnsash lma a3ml reload a7ot el f local storage fe allemails
if (localStorage.getItem('All Emails') != null) {
    allemails = JSON.parse(localStorage.getItem('All Emails'));
    
}
function addEmail() {
    var email = {
        name: nameInput.value,
        email: emailInput.value,
        password: PassInput.value
    }
    if (btn.innerHTML !='Login') {
        
        signUpSearch();
        if (flag == false) {
            allemails.push(email);
            localStorage.setItem('All Emails', JSON.stringify(allemails));
            //console.log('added');
            userMsg.innerHTML = 'Success';
            userMsg.style.color = 'green';
            
        }
        else if (flag == true) {
            //console.log('not added');
            userMsg.innerHTML = 'Email already exists';
            userMsg.style.color = 'red';
        }

        if(emailInput.value==''||nameInput.value==''||PassInput.value==''){
            userMsg.innerHTML = 'All inputs are required';
        }

    } else {

        //login code
        loginSearch();
        if(emailInput.value==''||PassInput.value==''){
            userMsg.innerHTML = 'All inputs are required';
        }
    }
    

}

var flag;
function signUpSearch() {
    flag = false;
    if (allemails.length != 0) {
        for (var i = 0; i < allemails.length; i++) {
            if (emailInput.value == allemails[i].email) {
                flag = true;
            }
        }
    }
}

function loginSearch(){
    if(allemails.length==0){  
        //console.log('msh tmam');
        userMsg.innerHTML='incorrect email or password';
        userMsg.style.color = 'red';
    }
    for(var i=0;i<allemails.length;i++){
        if(emailInput.value==allemails[i].email&&PassInput.value==allemails[i].password&&emailInput.value!=''&&PassInput.value!=''){
            //console.log('tmam'); 
            welcomeName.innerHTML=allemails[i].name;
            layer.classList.remove('d-none');
            mainpage.classList.add('d-none');
        }
        else {
            //console.log('msh tmam');
            userMsg.innerHTML='incorrect email or password';
            userMsg.style.color = 'red';
        }
        
    }

}
function clear(){
    nameInput.value='';
    emailInput.value='';
    PassInput.value='';
}
function goBackToMainPage(){
    mainpage.classList.remove('d-none');
    layer.classList.add('d-none');
    userMsg.innerHTML='';
    clear();
}