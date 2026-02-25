const accountId = 27;
let accountEmail = "test@gmail.com";
var accountPassword = "1234";
accountCity = "Indore";
let accountState;

//accountId = 13; //Constant value will not modified.

/*
    Nerver use var beacuse var doesn't have block and function scope. If we change one var value then it changes through intire program.
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
