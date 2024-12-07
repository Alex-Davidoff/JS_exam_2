function writeUserShort(parent, userObj){
    let user_c = insertDiv(parent, 'user');
    insertText(user_c, 'h3', `${userObj.name} (${userObj.id})`,'name');
    const origurl = new URL(window.location);
    const gotourl = new URL(origurl.origin + origurl.pathname.substring(0, origurl.pathname.lastIndexOf('/')) + '/user-details.html');
    gotourl.searchParams.set('user_id', userObj.id);
    insertButton(user_c, 'Details', gotourl.href, 'btn_userdetails');  
}

function writeUserDetailed(parent, userObj){
    let user_c = insertDiv(parent, 'user');
    insertText(user_c, 'h3', `${userObj.name} (${userObj.id})`,'name');
    insertText(user_c, 'p', `username: ${userObj.username}`, 'username');
    insertText(user_c, 'p', `email: ${userObj.email}`, 'email');
    insertText(user_c, 'p', `address: ${userObj.address.zipcode}, ${userObj.address.city}, ${userObj.address.street}, ${userObj.address.suite}, location at: lat ${userObj.address.geo.lat} lng ${userObj.address.geo.lng}`, 'address');
    insertText(user_c, 'p', `phone: ${userObj.phone}`, 'phone');
    insertText(user_c, 'p', `website: ${userObj.website}`, 'website');
    insertText(user_c, 'p', `company: ${userObj.company.name} (${userObj.company.bs}) - "${userObj.company.catchPhrase}"`, 'company');  
}

//const tmp = {
//    "id": 1,
//    "name": "Leanne Graham",
//    "username": "Bret",
//    "email": "Sincere@april.biz",
//    "address": {
//      "street": "Kulas Light",
//      "suite": "Apt. 556",
//      "city": "Gwenborough",
//      "zipcode": "92998-3874",
//      "geo": {
//        "lat": "-37.3159",
//        "lng": "81.1496"
//      }
//    },
//    "phone": "1-770-736-8031 x56442",
//    "website": "hildegard.org",
//    "company": {
//      "name": "Romaguera-Crona",
//      "catchPhrase": "Multi-layered client-server neural-net",
//      "bs": "harness real-time e-markets"
//    }
//  }