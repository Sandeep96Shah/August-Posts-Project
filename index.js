async function createPosts(){
    // fetch the parent node from the DOM
    const postsElement = document.getElementById('posts');

    // fetch posts data from the api
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    for(let i = 0; i < posts.length; i++) {
        
        // create required elements
        const postCard = document.createElement('div');
        const titleElement = document.createElement('p');
        const bodyElement = document.createElement('p');
        const byElement = document.createElement('p');
        const deleteElement = document.createElement('p');

        // add event listener to delete the repective card from the postsElement
        deleteElement.addEventListener('click', function() {
            postsElement.removeChild(postCard);
        })

        // add content in the required created elements
        titleElement.innerHTML = posts[i].title;
        bodyElement.innerHTML = posts[i].body;
        // byElement.innerHTML = "By" + posts[i].id;
        byElement.innerHTML = `By ${posts[i].id}`
        deleteElement.innerHTML = "X";

        // add style to the above elements
        titleElement.classList.add('title');
        // titleElement.setAttribute('id', 'title');
        // imgElement.setAttribute('src', "url");
        bodyElement.classList.add('body');
        byElement.classList.add('by');
        deleteElement.classList.add('deleteButton');
        postCard.classList.add('post');

        // create parent-child relationship for the created elements
        postCard.appendChild(titleElement);
        postCard.appendChild(bodyElement);
        postCard.appendChild(byElement);
        postCard.appendChild(deleteElement);
        postsElement.appendChild(postCard);

    }
}

createPosts();