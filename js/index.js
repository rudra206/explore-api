function loadUsers2 (){
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
//   .then(data => console.log(data))
.then( data =>displayUsers(data))
  
}

function displayUsers(data){
    for(const users of data){
        // console.log(users );
        // console.log(users.email );
        // console.log(users.address );
        console.log(users.username );
        
    }
}