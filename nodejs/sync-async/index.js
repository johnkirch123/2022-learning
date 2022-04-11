console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('Reading from database');
    return { id: id, gitHubUsername: 'john' };
  }, 2000);
}
