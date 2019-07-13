// validation script here
const inp_field = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/,
  telephone:/^\d{11}$/,
  slug:/^[a-z\d-]{8,20}$/
}

//spaces are not allowed in range
//select all the input fields and add an onkeyup event listener to them

const validate = (field, regex) => {
  regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}

let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
  'keyup', e => {
    validate(e.target, inp_field[e.target.attributes.name.value])
  }
));
//document.addEventListener('click', () => console.log('click'));