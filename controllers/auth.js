
const { checkForUser } = require('../db/db');

exports.register = (req, res) => {
  const { username, password, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress } = req.body;
  let usernameError = '';
  checkForUser(username, (data) => {
    if (data.length > 0) {
      usernameError = 'Username already exists.';
    } else {
      console.log('Valid Username');
      //todo -- Add new user to database
    }
  });

  //todo -- adjust the view to display error messages as needed
  res.render('signup', { message: usernameError });
}