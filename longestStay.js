const reservations = [
    { guest: 'Lucas', nights: 3, paid: true },
    { guest: 'Ana', nights: 1, paid: false },
    { guest: 'Carlos', nights: 5, paid: true },
    { guest: 'Julia', nights: 2, paid: true }
];

const getLongestStay = () => {
   let  longeststay = reservations[0];

   for(let i = 1; i < reservations.length; i++) {
    if(reservations[i].nights > longeststay) {
        longeststay = reservations[i];
    }
   }
   return longeststay
}