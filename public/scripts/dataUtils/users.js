
fetch('/users')
  .then(res => res.json())
  .then(data => {
    const users = data.map(user => `<li>${user.username}</li>`);
    document.getElementById('users').innerHTML = users.join('');
  });