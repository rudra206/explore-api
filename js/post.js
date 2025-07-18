function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/*
1.get the container element where you want to add the new element
2.creat child element
3.Set innereText or innerHtml
4.appendChild
*/


function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        // console.log(post);

        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
<h4> Users-</h4>
<h5> Post: title</h5>
<p> post Description</p>
` ;
        postsContainer.appendChild(postDiv);
    }
}
loadPost();