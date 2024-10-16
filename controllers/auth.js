require('dotenv').config();
const IS_DEV = (process.env.IS_DEV === 'TRUE') ? true : false;
const { checkForUser } = IS_DEV ? require('../db/dev_db') : require('../db/db');

exports.register = (req, res) => {
  const { username, password, passwordConfirm, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress } = req.body;
  let usernameError = validateUsername(username);
  let passwordError = validatePassword(password, passwordConfirm);

  //todo -- adjust the view to display error messages as needed
  res.render('signup', { usernameError: usernameError, passwordError: passwordError });
}

function validateUsername(username) {
  // Check if the username already exists
  checkForUser(username, (data) => {
    let usernameError = 'Username already exists.';
    if (data.length > 0) {
      console.log(usernameError);
      return usernameError;
    } 
    else {
      if (IS_DEV === true) {
        console.log('Using JSON DB, not checking for existing user.');
      } else {
        console.log('Username does not exist.');
        return null;
      //todo -- Add new user to database
      }
    }
  });
}

function validatePassword(password, passwordConfirm) {
  let passwordError = 'Passwords do not match.';
  if (password !== passwordConfirm) {
    console.log(passwordError);
    return passwordError;
  } else {
    console.log('Passwords match.');
    return null;
  }
};