let costprice = 25000;
let roadtax = null;

if (costprice > 100000) {


    roadtax = costprice * (15 / 100);
    console.log("Cost price is greater than 100000, so you want to pay 15% = ", roadtax);


} 

else if (costprice > 50000) { 
    roadtax = costprice * (10 / 100);
    console.log("Cost price is ", costprice, " so you want to pay 10% = ", roadtax);


}

else if (costprice <= 50000) { 
    roadtax = costprice * (5 / 100);
    console.log("Cost price is ", costprice, " so you want to pay 5% = ", roadtax);


}

else {
    console.log("Need to contact MVD office for further details");
}