#username-gen

**username-gen is package who generates random usernames**

**Starting**

`npm install username-gen`

```javascript
const usernameGen = require("username-gen")

//generate username with a maximum length of 8 and without spaces
usernameGen.generateUsername(8, false) //Cobra70

//generate username with a maximum length of 14 and with spaces
usernameGen.generateUsername(14, true) //drunk variou72
```