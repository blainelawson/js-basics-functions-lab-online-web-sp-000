// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street <= 42) {
        return 42 - street;
    } else {
        return street - 42;
    }
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
    if (street2 >= street1) {
        return (street2 - street1) * 264;
    } else {
        return (street1 - street2) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    var feetTravelled =  distanceTravelledInFeet(start, destination)
    switch (true) {
        case (feetTravelled < 400):
            return 0;
            break;
        case (feetTravelled >= 400) && (feetTravelled < 2000):
            return (feetTravelled - 400) * 0.02;
            break;
        case (feetTravelled >= 2000) && (feetTravelled <=2500):
            return 25;
            break;
        case (feetTravelled > 2500):
            return 'cannot travel that far';
            break;
    }
}