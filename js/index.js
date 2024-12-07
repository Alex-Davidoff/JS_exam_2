fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((usersArr) => usersArr.forEach((element) => {
    writeUser(document.getElementById('usersblock'), element);
  }));