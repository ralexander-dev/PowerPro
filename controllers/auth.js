/***********************************************************************************************************************************
 File: auth.js
 Author(s): Russell Alexander
 Description: 
  This file handles authentication for login and registering users.
 Date Created: 2024-10-xx
 Last Modified: 2024-10-17
***********************************************************************************************************************************/

/* Functionality for registering new users */
exports.register = (req, res) => {
  const { validateUsername, validatePassword } = require('./register');
  const { username, password, passwordConfirm, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress } = req.body;
  let usernameError = validateUsername(username);
  let passwordError = validatePassword(password, passwordConfirm);

  if(usernameError || passwordError) {
    res.render('signup', { usernameError: usernameError, passwordError: passwordError });
  } else {
    //todo -- add new user to database
    res.render('index');
  }
}

exports.login = (req, res) => {
  const { validateUsername } = require('./login');
  const { username, password } = req.body;
  const isValidLogin = validateUsername(username, password);

  if(isValidLogin) {
    res.render('index');
  } else {
    res.render('login', { loginError: 'Invalid username or password.' });
  }
}