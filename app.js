let pswd = document.querySelector('#pwd');

let cpswd = document.querySelector('#cpwd');

let msg = document.querySelector('.message');
let button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  e.preventDefault();
  chechkPswd();
});

function chechkPswd() {
  const pswdValue = pswd.value;
  const cpswdValue = cpswd.value;

  if (pswdValue.length != 0) {
    if (pswdValue == cpswdValue) {
      msg.style.display = 'none';
    } else {
      msg.style.display = 'block';
    }
  }
}
