function writePost(parent, postObj, writeShort){
    let post_c = insertDiv(parent, 'post');
    if (writeShort) {
        insertText(post_c, 'p', 'Post title: '+postObj.title, 'posttitle');
        const origurl = new URL(window.location);
        const gotourl = new URL(origurl.origin + origurl.pathname.substring(0, origurl.pathname.lastIndexOf('/')) + '/post-details.html');
        gotourl.searchParams.set('post_id', postObj.id);
        insertButton(post_c, 'Details', gotourl.href, 'btn_postdetails');
    } else {
    insertText(post_c, 'p', 'userId: '+postObj.userId, 'postuserId');
    insertText(post_c, 'p', 'id: '+postObj.id, 'postid');
    insertText(post_c, 'p', 'Post title: '+postObj.title, 'posttitle');
    insertText(post_c, 'p', 'body: '+postObj.body, 'postbody');
    }
}