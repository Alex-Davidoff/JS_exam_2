const url = new URL(window.location);
const userid = url.searchParams.get('user_id');
fetch('https://jsonplaceholder.typicode.com/users/'+userid)
  .then((response) => response.json())
  .then((user) => writeUserDetailed(document.getElementById('userblock'), user)
  );

const label_c = document.getElementById('posts_label');
label_c.style.display = 'none';

document.getElementById('btn_showUserPosts').onclick = function (){
    label_c.style.display = 'block';
    const fetchurl = new URL('https://jsonplaceholder.typicode.com/users/'+userid+'/posts');
    document.getElementById('postsblock').replaceChildren();
    fetch(fetchurl.href)
    .then((response) => response.json())
    .then((posts) => posts.forEach((element) => {
        writePost(document.getElementById('postsblock'), element, true);
    }) );
}