function writeComment(parent, commentObj){
    let comment_c = insertDiv(parent, 'comment');
    insertText(comment_c, 'p', 'postId: '+commentObj.postId, 'comment_postid');
    insertText(comment_c, 'p', 'id: '+commentObj.id, 'comment_id');
    insertText(comment_c, 'p', 'name: '+commentObj.name, 'comment_name');
    insertText(comment_c, 'p', 'email: '+commentObj.email, 'comment_email');
    insertText(comment_c, 'p', 'body: '+commentObj.body, 'comment_body');
}