function topRatedRestaurant(restaurants) {
if(!Array.isArray(restaurants)){
return "Invalid";
}
if(restaurants.length===0){
return "Invalid";
}
let bestRating=restaurants[0];
for(let i=1;i<restaurants.length;i++){
if(restaurants[i].rating>bestRating.rating){
bestRating=restaurants[i];
}    
}
return bestRating.name.toUpperCase();
}
