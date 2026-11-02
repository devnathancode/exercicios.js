const users = [
    { name: 'Lucas', age: 17 },
    { name: 'Ana', age: 22 },
    { name: 'Carlos', age: 19 },
    { name: 'Julia', age: 16 }
];

const findUsers = (name) => {
    const find = users.find(item => item.name === name);

    return find
}