function calculateAiCost(tokensUsed) {
if (typeof tokensUsed!=='number'){
    return "Invalid";
}
if(tokensUsed<0){
    return "Invalid";
}
if(tokensUsed<=500){
    return 0;
}
let extraTokens=tokensUsed-500;
let extraCharges=Math.floor(extraTokens/100);
let totalcost=extraCharges*5;
return totalcost;
}
