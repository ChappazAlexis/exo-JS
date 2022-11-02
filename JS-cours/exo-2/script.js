function getClock () {

    dateDiv = document.getElementById("clock");
    
    let date = new Date()
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();
    
    let time = h + ":" + m + ":" + s
     
    document.getElementById("clock").innerText = time;
}

setInterval(
    getClock, 1000
)




// navbar, active link

let links = document.getElementsByClassName('link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
  }


// liste course

//envoyez
  document.querySelector('#sendInput').addEventListener('click', function() {

    let input = document.querySelector('#inputText')
    let list = document.querySelector('#list')
    let item = document.createElement('li');
    let itemText = document.createTextNode(input.value);

    item.appendChild(itemText);
    list.appendChild(item); 

    input.value = "";
  })


  //suppr
  document.querySelector('#deleteInput').addEventListener('click', function (e) {
      let ul = document.getElementById('list');
      if(ul.getElementsByTagName('li').length >= 1) {
          ul.removeChild(ul.lastElementChild);
      } else {
          e.preventDefault()
      }
  })





  //formulaire

  document.querySelector('#confirmForm').addEventListener('click', function (){

    let inputSurname = document.querySelector('#surname').value;
    let inputName = document.querySelector('#name').value;
    let inputEmail = document.querySelector('#email').value;
    let inputTel = document.querySelector('#tel').value;
    let inputPwd = document.querySelector('#password').value;

    let errorDiv = document.querySelector('#error');

    if(inputSurname.length == 0 ) {
        errorDiv.innerHTML = `<p class="errorText">Le prénom est requis</p>`
    } else if(inputName.length == 0) {
        errorDiv.innerHTML = `<p class="errorText">Le nom est requis</p>`
    } else if(inputEmail.length == 0 && inputEmail.includes('@') == false) {
        errorDiv.innerHTML = `<p class="errorText">Le mail est requis et dois être dans le bon format</p>`
    } else if(inputTel.length !== 10) {
        errorDiv.innerHTML = `<p class="errorText">Le téléphone est requis et dois être dans le bon format</p>`
    } else if(inputPwd.length == 0) {
        errorDiv.innerHTML = `<p class="errorText">Le mot de passe est requis et doit contenir : 8 caractères, et 1 caractères spécial</p>`
    } else {
        errorDiv.innerHTML = `<p class="goodText">C'EST BON</p>`
    }

    // console.log(inputSurname);
    // console.log(inputName);
    // console.log(inputEmail);
    // console.log(inputTel);
    // console.log(inputPwd);

  })


//     abcdefghijqlmnopqrst ABCDEFGHIJKLMNOPQRSTUVWXYZ !?#