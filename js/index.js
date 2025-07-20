function loadUsers2 (){
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
//   .then(data => console.log(data))
.then( data =>displayUsers2(data))
  
}

// function displayUsers(data){
//     for(const users of data){
//         // console.log(users );
//         // console.log(users.email );
//         // console.log(users.address );
//         console.log(users.username );
        
//     }
// }    or

function displayUsers2(data){
  const ul =document.getElementById('users-list')
  for( const user of data){
console.log(user.name);
const li =document.createElement('li');
li.innerText=user.name;
// li.innerText=user.email;
ul.appendChild(li);

  }
}


function deletePost (){
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
function creatAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}