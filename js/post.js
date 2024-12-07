function writePost(parent, postObj, writeShort){
    let post_c = insertDiv(parent, 'post');
    if (writeShort) {
        insertText(post_c, 'p', 'Post title: '+postObj.title, 'title');
        const origurl = new URL(window.location);
        const gotourl = new URL(origurl.origin + origurl.pathname.substring(0, origurl.pathname.lastIndexOf('/')) + '/post-details.html');
        gotourl.searchParams.set('post_id', postObj.id);
        insertButton(post_c, 'Details', gotourl.href, 'btn_postdetails');
    } else {
    insertText(post_c, 'p', 'userId: '+postObj.userId, 'userId');
    insertText(post_c, 'p', 'id: '+postObj.id, 'id');
    insertText(post_c, 'p', 'Post title: '+postObj.title, 'title');
    insertText(post_c, 'p', 'body: '+postObj.body, 'body');
    }
}

/*
{
userId: 4, 
id: 31, 
title: 'ullam ut quidem id aut vel consequuntur', 
body: 'debitis eius sed quibusdam non quis consectetur vi…sci atque\nquaerat voluptatem adipisci repudiandae'
}
*/ 