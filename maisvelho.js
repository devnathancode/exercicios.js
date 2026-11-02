const users = [
    { name: 'Lucas', age: 17 },
    { name: 'Ana', age: 23 },
    { name: 'Pedro', age: 19 },
    { name: 'Maria', age: 31 },
    { name: 'João', age: 26 }
];

function usuarioMaisVelho() {
    let usuarioMaisVelho = users[0].age
    for (let user of users) {
        if (user.age > usuarioMaisVelho) {
            usuarioMaisVelho = user.age
        } 
    }
    
    return usuarioMaisVelho;
}
