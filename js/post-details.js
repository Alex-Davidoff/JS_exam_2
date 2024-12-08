const url = new URL(window.location);
const postid = url.searchParams.get('post_id');
fetch('https://jsonplaceholder.typicode.com/posts/'+postid)
    .then((response) => response.json())
    .then((post) => writePost(document.getElementById('postblock'), post, false)  );

fetch('https://jsonplaceholder.typicode.com/posts/'+postid+'/comments')
    .then((response) => response.json())
    .then((comments) => comments.forEach(element => {
        writeComment(document.getElementById('commentsblock'), element)
    })  );