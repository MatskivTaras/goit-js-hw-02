const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return ( (login.length > 3) && (login.length < 17) ) ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  let res = false;  
  for (let existLogin of allLogins) {
    if (existLogin === login) {
        res = true;
        break;
    }
  }
  return res;
};

const addLogin = function (allLogins = [], login) {
  let res;
  if (isLoginValid(login)) {
    if (! isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        res = "Логін успішно доданий!";
    } else {
        res = "Такий логін вже використовується!";
    };
  } else {
      res = "Помилка! Логін повинен бути від 4 до 16 символів";
  };
  return res;
};

console.log("----------", logins);

console.log(addLogin(logins, 'Ajax'));

console.log(addLogin(logins, 'robotGoogles'));

console.log(addLogin(logins, 'Zod'));

console.log(addLogin(logins, 'jqueryisextremelyfast'));

console.log("----------", logins);