//Rahul bought 400 hotDogs for the clg picnic.
//if there were contained 5 hotDogs in each container,then how many total container needed?
//write this program without using \ or % operator
let totalHotDog = 400;
let hotDogPerContainer = 5;
let totalContainer = 0;
let temp = totalHotDog + hotDogPerContainer ;

while(temp > hotDogPerContainer)
{
    temp = temp -hotDogPerContainer ;
    totalContainer++ ;
}
console.log("Total container needed :" + totalContainer);