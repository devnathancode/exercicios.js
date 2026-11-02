const users = [
    { name: 'Lucas', age: 17, active: true },
    { name: 'Ana', age: 22, active: false },
    { name: 'Carlos', age: 19, active: true },
    { name: 'Julia', age: 16, active: false }
];

const getActiveUser = (name) => {
    const find = users.find(user => user.name === name);

    if (find.active === true) {
        return find
    }
}