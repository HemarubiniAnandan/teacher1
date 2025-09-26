// testBcrypt.js
const bcrypt = require('bcrypt');

const hash = "$2b$10$eZhtWhp/Zv41uYZfQJegyOeIxhMDsmnLA8DGGZO.91DkC8mvfVFgu";
const password = "password123"; // try your plain password

bcrypt.compare(password, hash)
  .then(isMatch => {
    console.log("Password match?", isMatch);
  })
  .catch(err => console.error(err));
