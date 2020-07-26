//Http request
const REQ = new XMLHttpRequest();

function getTodos() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);
      for (let i = 0; i < 200; i++) {
        document.querySelector("#resp").innerHTML = REQ.response[i].id;
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].userId));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].id));
        console.log((document.querySelector("#resp").innerHTML =REQ.response[i].title));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].completed)
        );

        let para = document.createElement("P"); // Create a <p> element
        
        para.className = "alert alert-primary col-md-8";
        para.innerText = `The User id is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].id)} \n The User id is :  ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].userId)} \n  The title is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].title)}  \n  The completed status is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].completed)}`; // Insert text
        let myDiv = document.getElementById("todos");
        if (myDiv!=null) {myDiv.appendChild(para);}
      }
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("GET", "http://jsonplaceholder.typicode.com/todos/");
  REQ.setRequestHeader("Content-Type", "Application/json");
  //This is to fix the cors ERROR
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.responseType = "json";
  REQ.send();
}


// POSTING INFORMATION TO THE SERVER
let data = '{"title": "Elegance","body": "Eloquance","userId": 1}';
function postTodo() {
  REQ.open("POST", "http://jsonplaceholder.typicode.com/posts");
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.onload = () => {
    if (REQ.status === 201) {
      console.log(REQ.response);
    } else {
      console.log("handle error");
    }
  };
  REQ.send(data); // What we want to send across
}






