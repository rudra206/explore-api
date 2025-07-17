function loadUsers2 (){
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(data => console.log(data)
  )

    
}