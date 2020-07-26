
document.querySelector('form.formGetID').addEventListener('submit', function(e) {
  e.preventDefault();
  let x = document.querySelector('form.formGetID').elements;

  console.log("ID: ", x['todoid'].value);
  let i = x['todoid'].value -1;
  fetch('http://jsonplaceholder.typicode.com/todos')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        
          document.querySelector("#resp").innerHTML = data[i].id;
        //   console.log((document.querySelector("#resp").innerHTML = data[i].userId));
        //   console.log((document.querySelector("#resp").innerHTML = data[i].title));
        //   console.log((document.querySelector("#resp").innerHTML =data[i].completed));
        //   console.log((document.querySelector("#resp").innerHTML =data[i].completed));
          let para = document.createElement("P"); // Create a <p> element
      
          para.className = "alert alert-danger col-md-8";
          para.innerText = `The User id is : ${(document.querySelector(
            "#resp"
          ).innerHTML = data[i].id)} \n The User id is :  ${(document.querySelector(
            "#resp"
          ).innerHTML = data[i].userId)} \n  The title is : ${(document.querySelector(
            "#resp"
          ).innerHTML = data[i].title)}  \n  The completed status is : ${(document.querySelector(
            "#resp"
          ).innerHTML = data[i].completed)}`; // Insert text
          let myDiv = document.getElementById("todosID");
          if (myDiv!=null) {myDiv.appendChild(para);}
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  




});




