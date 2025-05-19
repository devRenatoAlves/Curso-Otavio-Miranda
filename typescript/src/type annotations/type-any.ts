// Utilize Any, em apenas últimos casos, como quando não sabemos o tipo de um dado

function showMessage(message: any) {
  console.log(message);
}

showMessage('Hello World');
showMessage(123);
showMessage(true);
