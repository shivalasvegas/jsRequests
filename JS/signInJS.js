
document.querySelector('form.form').addEventListener('submit', function(stop) {
  stop.preventDefault();
  let x = document.querySelector('form.form').elements;
  let uName =("Username: ", x['userid'].value);
  console.log(uName);
  alert(uName)
  console.log("Password: ", x['pwd'].value);
});

