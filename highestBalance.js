const accounts = [
    { name: 'Lucas', balance: 450 },
    { name: 'Ana', balance: 1200 },
    { name: 'Carlos', balance: 800 },
    { name: 'Julia', balance: 300 }
];

const getBiggestBalance = () => {
   let acountHighestBalance = accounts[0];

   for(let i = 1; i < accounts.length; i++) {
    if (accounts[i].balance > acountHighestBalance.balance) {
        acountHighestBalance = accounts[i];
    }
   }
   return acountHighestBalance;
}

