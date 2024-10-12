
exports.register = (req, res) => {
  const { username, password, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress } = req.body;
  //! user data needs to be checked against database for matching data..
  //! user data needs to be validated before being inserted into the database.
  //! user passwords need to be encrypted before being sent across network. !! No password data should be exposed in plain text.
  console.log(username, password);
  res.redirect('/');
}