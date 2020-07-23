const REQ = new XMLHttpRequest();

document.querySelector('form.formGetID').addEventListener('submit', function(e) {
  e.preventDefault();
  let x = document.querySelector('form.formGetID').elements;

  console.log("ID: ", x['todoid'].value);

  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);

        let para = document.createElement("P"); // Create a <p> element
        
        para.className = "alert alert-danger col-md-8";
        para.id
        para.innerText = `The User id is : ${(document.querySelector("#resp").innerHTML = REQ.response.id)}
         \n The User id is :  ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.userId)} \n  The title is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.title)}  \n  The completed status is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.completed)}`; // Insert text

        let myDiv = document.querySelector("#todosID");
        if (myDiv!=null) {myDiv.appendChild(para);}

    } else {
      
      console.log(`Handle Error!`);
    }
  };
  REQ.open("GET", "http://jsonplaceholder.typicode.com/todos/"+ x['todoid'].value);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.responseType = "json";
  REQ.send();
});

fetch('http://jsonplaceholder.typicode.com/todos')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});




