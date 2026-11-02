const users = [
    { name: 'Lucas', age: 17 },
    { name: 'Ana', age: 23 },
    { name: 'Pedro', age: 19 },
    { name: 'Maria', age: 31 }
];

function primeiroMaiorDeIdade() {

    let user = users.find(user => {
        return user.age >= 18
    });
  return user;
}